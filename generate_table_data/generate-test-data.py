#coding: utf-8

import requests
from random import randrange
import pandas as pd


if __name__ == '__main__':
	#----------------------
	# download words corpus
	word_site = "https://www.mit.edu/~ecprice/wordlist.10000"
	resp = requests.get(word_site)

	word_arr = []
	for elem in resp.text.split('\n'):
	    word_arr.append(elem)
	
	# column description by types
	cols_string = ['name','description','text','random_text_red','random_text_blue']
	cols_int = ['score_1_10','price','count'] #'id',
	cols_combined = cols_string + cols_int

	# columns order for final DF
	cols_order1 = [
	    'id',
	    'score_1_10',
	    'name','description','text',
	    'price','count',
	    'random_text_red','random_text_blue'
	]

	def create_dict():
	    d = {}
	    for elem in cols_combined:
	        if elem in cols_string:
	            numOfRandWords = randrange(5)
	            w=''
	            for i in range(numOfRandWords):
	                randNum = randrange(10000)
	                w += word_arr[randNum] + ' '
	            d[elem] = w
	        if elem in cols_int:
	            d[elem] = randrange(1000)    
	    return d


	#----------------------
	# making list of dictionaries
	number_of_generated_rows = 100
	total_lod = []
	for i in range(number_of_generated_rows):
	    d = create_dict()
	    d['id'] = i
	    total_lod.append(d)

	print(len(total_lod))

	#----------------------
	# DataFrame
	df = pd.DataFrame(total_lod)
	df = df[cols_order1]
	df.head(5)

	#----------------------
	# export to json
	df.to_json('data.json', orient='records')	
