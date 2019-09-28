import csv
import json
import pymongo

dbclient = pymongo.MongoClient("mongodb+srv://user:useruser@tamkeen-besmart-assignment-c8sua.mongodb.net/test?retryWrites=true&w=majority")
db = dbclient["tamkeen"]
countriesDB = db['countries']

dict_to_insert = {}
curr_country = ''
cities = []
results = []
with open('./world-cities.csv', 'r') as file:
    csv_reader = csv.reader(file, delimiter=',')
    for row in csv_reader:
        if curr_country == row[1]:
            cities.append(row[0])
        else:
            dict_to_insert = {'country': curr_country, 'cities': cities}
            curr_country = row[1]
            cities = [row[0]]
            results.append(dict_to_insert)

print(countriesDB.insert_many(results))
