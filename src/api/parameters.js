const temperature = 0.5;
const max_tokens= 64;
const top_p= 1.0;
const frequency_penalty= 0.0;
const presence_penalty= 0.0;
const n= 1;
const engine_list = [
    "text-curie-001",
    "text-davinci-002",
    "text-babbage-001",
    "text-ada-001"
]

export {
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
    n,
    engine_list
}