import time
import requests
import json
import random


url = 'http://localhost:3000/saveSlots'

print("Started")
slots = [1001,1002,1003,1004,1005]

while 1 :
    
    occupiedSlot= []
    unoccupiedSlot = []
    #bin = randint(0,1)
  
    random.shuffle(slots)

    cut = random.randint(0, len(slots))
    occupiedSlot = slots[:cut]
    unoccupiedSlot = slots[cut:]
    occupiedSlot.sort()
    unoccupiedSlot.sort()
    #print(type(occupiedSlot))
	

    for i in range(15):
    	json = '{\"occupiedSlot\":'+str(occupiedSlot)+',\"unoccupiedSlot\":'+str(unoccupiedSlot)+'}'
    	print (json)
    	
		# sending the HTTP post request to the server
    	headers = {'Content-type': 'application/json'}
    	response = requests.post(url, data=json, headers=headers)
    	print('Response Code : ' + str(response.status_code))
    	
    	time.sleep(1)
		

        
    
    