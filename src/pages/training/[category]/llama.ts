class Generator{

    systemPrompt: string;
    url: string;
    headers: any;
    maxTokens: number;

    constructor(maxTokens = 20,) {
        this.url = 'https://api-inference.huggingface.co/models/openchat/openchat-3.5-1210';
        this.headers = {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,es;q=0.8,es-ES;q=0.7,en-GB;q=0.6",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-use-cache": "false"
        };

        if(window.localStorage?.getItem('token')){
            this.headers["Authorization"] = `Bearer ${window.localStorage?.getItem('token')}`
        }

        this.systemPrompt = `[System prompt]: You are a helpful assistant. You know some facts about the image that the user it's trying to deduce (playing a deducing game inspired in Sherlock Holmes abilities), you will only reply about the facts you know if they're right or not. These are the facts you know about the image: (user can't see the facts) `;
        this.maxTokens = maxTokens;
    }

    async chat(facts: string, prompt: string) {

        this.systemPrompt += `${facts}[User]:Based on the image I can deduce these facts about the owner: ${prompt}[Assistant]:`;

        const payload = {
            inputs: this.systemPrompt,
            parameters: {
                max_new_tokens: 200
            }
        }

        const response = await fetch(this.url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(payload)
        });

        if(response.status === 429){

            const targetElement = document.getElementById("authentication-modal");

            targetElement?.classList.remove("hidden");
            targetElement?.classList.add("flex");
            return null;
        }

        const data = (await response.text()).split("[Assistant]:")[1].split('"')[0].split("[User]:")[0];
        return data;
    }

}

const llama = new Generator();

async function generate_response(){

    const promptElement = (document.getElementById("prompt") as HTMLInputElement);

    if(!promptElement.value) return null;

    try {

        const element = (document.getElementById("facts") as HTMLInputElement);
        const res = await llama.chat(element.value, promptElement.value);

        const responseElement = (document.getElementById("response") as any);
        responseElement.value = res;

        isResponseGenerated = true;

        showAction('next');

    } catch (error) {
        console.error('Error:', error);
    }
}


const formElement = document.getElementById("guessForm");

var isResponseGenerated = false;

formElement?.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(submitBtn) submitBtn.disabled = true;

    await generate_response();

    if(submitBtn) submitBtn.disabled = false;

    isResponseGenerated = true;

    const responseElement = document.getElementById("response");

    if(responseElement){
        responseElement.style.height = "13.85rem";
        responseElement.style.height = responseElement.scrollHeight + "px";
    }

});



// To handle button next/submit

const submitBtn = document.getElementById("submit") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;

function showAction(action: 'submit' | 'next'){
    const showSubmit = action === 'submit' ? 'block' : 'none';
    const showNext = action === 'next' ? 'block' : 'none';

    if(submitBtn) submitBtn.style.display = showSubmit;
    if(nextBtn) nextBtn.style.display = showNext;
}

const promptElement = document.getElementById("prompt") as HTMLTextAreaElement;

promptElement?.addEventListener('input', e => {

    if(isResponseGenerated){

        showAction('next');

    }

    if((e.target as HTMLTextAreaElement).value ){

        showAction('submit');

    } else {

        showAction('next');

    }

});