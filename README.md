# Explayn AI

 An explainable AI platform which provides groundtruth references together with generated data. 
 Check out our demo at: www.explayn.tech!

 ![](example.png)
 ## How to run:
Our hackathon project consists of 3 parts: `ui`, `app`, `backend`.
 ### UI:

 Go to `ui`, and run:
 ```
 yarn
 yarn dev
 ```

 ### App:
To build our dashboards, go to `app`, and run:
```
yarn
yarn dev
```

 ### Backend:
To run server serving the data analysis, go to `backend`, and run:
```
conda create -n explayn python=3.10
conda activate explayn
pip install bs4 annoy numpy pandas fastapi cohere "uvicorn[standard]"
uvicorn main:app 
```
 
 ![](example1.png)
