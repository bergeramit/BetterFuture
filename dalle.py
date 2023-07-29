import openai
import urllib.request
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import os

openai.api_key = "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"
PROMPT = "student with GAMT 760 score smiling. You can see the smile and the score"

def create_image(prompt):
    response = openai.Image.create(
        prompt=prompt,
        n=1,
        size="256x256",
    )

    url = response["data"][0]["url"]
    return url

def present_image(url):
    os.remove("image.png")
    urllib.request.urlretrieve(url, "image.png")
    img = mpimg.imread('image.png')
    plt.imshow(img)
    plt.show()

def main():
    while True:
        prompt = input("Prompt: ")
        url = create_image(prompt)
        present_image(url)

if __name__ == "__main__":
    main()