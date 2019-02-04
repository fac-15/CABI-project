import requests

url = 'http://192.171.139.69/api/api-auth/login/'

client = requests.session()

client.get(url)

try:
	csrftoken = client.cookies['csrftoken']
	
	login_data = dict(username='XXXXXX',password='XXXXXX',csrfmiddlewaretoken=csrftoken,next='/api/pests/')
	
	r = client.post(url, data=login_data, headers=dict(Referer=url))
	
	print r.status_code, r.headers
	
	get_pests = client.get('http://192.171.139.69/api/pests/')
	
	print get_pests.content
	
except:
	print "Error"