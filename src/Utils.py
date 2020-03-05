from datetime import *

# Retourne la datetime du lundi de la semaine a 00h00m00s
def getLundiAvecNumSemaine(annee, numsemaine):
    d = str(annee) + "-W" + str(numsemaine) + "-1"
    return datetime.strptime(d, "%Y-W%W-%w")


# Retourne la datetime du dimanche de la semaine a 23h59m59s
def getDimancheAvecNumSemaine(annee, numsemaine):
    # numsemaine +1 pour obtenir le lundi de la semaine suivante
    d = str(annee) + "-W" + str(numsemaine + 1) + "-1"
    r = datetime.strptime(d, "%Y-W%W-%w")
    return r - timedelta(seconds=1)
