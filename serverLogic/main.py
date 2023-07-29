from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from httpx import AsyncClient

app = FastAPI()

# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Replace 'YOUR_CHATGPT_API_ENDPOINT' with the actual ChatGPT API endpoint
CHATGPT_API_ENDPOINT = 'YOUR_CHATGPT_API_ENDPOINT'

async def get_chatgpt_response(prompt):
    async with AsyncClient() as client:
        response = await client.post(CHATGPT_API_ENDPOINT, json={"prompt": prompt})
        return response.json()

@app.post("/generate/")
async def generate_chat_response(request: Request):
    try:
        data = await request.json()
        prompt = data["prompt"]

        if not prompt:
            raise ValueError("Prompt cannot be empty.")

        # Call the ChatGPT API to generate the response
        response = await get_chatgpt_response(prompt)

        return JSONResponse(content=response, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
