import configparser

config = configparser.ConfigParser()
config.read("../properties.ini")

print (config.get('Soundcloud', 'username', fallback=None))
print (config.get('Soundcloud', 'password', fallback=None))
print (config.get('Soundcloud', 'clientid', fallback=None))
print (config.get('Soundcloud', 'clientsecret', fallback=None))

print(config['Soundcloud']['username'])