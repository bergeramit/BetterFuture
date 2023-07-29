from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from httpx import AsyncClient
import logging
from chatgpt import get_chat_gpt_response
from dalle import get_create_image
import uvicorn

logger = logging.getLogger("uvicorn")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate-text/")
async def generate_chat(request: Request):
    try:
        logger.error("Reached here!")
        prompt = await request.json()

        if not prompt:
            raise ValueError("Prompt cannot be empty.")

        # Call the ChatGPT API to generate the response
        response = get_chat_gpt_response(prompt)

        return JSONResponse(content=response, status_code=200)

    except Exception as e:
        logger.error(str(e))
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.post("/generate-img/")
async def generate_img_response(request: Request):
    try:
        data = await request.json()
        prompt = data["prompt"]

        if not prompt:
            raise ValueError("Prompt cannot be empty.")

        # Call the ChatGPT API to generate the response
        response = await get_create_image(prompt)

        return JSONResponse(content=response, status_code=200)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
