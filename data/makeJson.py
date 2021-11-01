import csv
import json
f=open('pipe.csv')
reader=csv.reader(f,delimiter=';')
header=next(reader)
res=[]
for row in reader:
    r={}
    for idx,field in enumerate(header):
        r[field]=row[idx]
    res.append(r)

with open("./pipe.json", "w") as f:
        json.dump(res, f)

