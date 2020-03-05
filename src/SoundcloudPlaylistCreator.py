#!/usr/bin/env python
# -*- coding: utf-8 -*-

import Utils
from datetime import *
from SoundcloudService import client

def createPlaylist(numeroSemaine):
    # Initialization part
    datetimeFormat = "%Y/%m/%d %H:%M:%S %z"

    # numeroSemaine = 0
    # if args.numsemaine is None:
    #     numeroSemaine = int(date.today().strftime("%W"))
    # else:
    #     numeroSemaine = args.numsemaine[0]

    periodeDebut = Utils.getLundiAvecNumSemaine(date.today().year, numeroSemaine)
    periodeFin = Utils.getDimancheAvecNumSemaine(date.today().year, numeroSemaine)

    listSetsId = []
    listTracksId = []
    dateTimeLastActivitie = datetime.now()
    minuteInMilliseconds = 60000

    print("Semaine n° %s" % numeroSemaine)

    # Initialisation activities
    # create an array of track ids
    activities = client.get('/me/activities', limit=1)

    print(activities)

    while periodeDebut < dateTimeLastActivitie:
        for activitie in activities.collection:
            track = activitie.origin
            dateTimeLastActivitie = datetime.strptime(activitie.created_at, datetimeFormat).replace(tzinfo=None)
            if dateTimeLastActivitie < periodeFin:
                if (track.duration / minuteInMilliseconds) > 10:
                    print("Set : %s - %s" % (dateTimeLastActivitie, activitie.origin.title))
                    listSetsId.append({'id': activitie.origin.id})
                else:  # Track de moins de 10 minutes
                    print("Track : %s - %s" % (dateTimeLastActivitie, activitie.origin.title))
                    listTracksId.append({'id': activitie.origin.id})

        activities = client.get(activities.next_href)

    # create the playlist
    if len(listSetsId) > 0:
        client.post('/playlists', playlist={
            'title': 'Set de la semaine %s' % numeroSemaine,
            'tracks': listSetsId,
            'sharing': 'private'})
    else:
        print("La liste des sets est vide")

    if len(listTracksId) > 0:
        client.post('/playlists', playlist={
            'title': 'Track de la semaine %s' % numeroSemaine,
            'tracks': listTracksId,
            'sharing': 'private'})
    else:
        print("La liste des tracks est vide")
