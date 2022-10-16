from bs4 import BeautifulSoup
import sys

with open(sys.argv[1]) as fp:
    soup = BeautifulSoup(fp, "html.parser")
    txt = soup.find('div', {'class': 'main-content-wrap'}).text

with open(sys.argv[2], 'w') as fp:
    print(txt, file=fp)
