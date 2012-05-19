// <Script Language = Javascript>

// excludedFriendsURL = 
// is an Array of excluded friends' URL - these information is gotten
// from information asked by the Facebook app

photos = document.getElementsByClassName('uiProfilePhoto')
// These array from PHP receives all the photos from the page

for(i=0; i < excludedFriendsURL.length ; i++){ //This loop scans all photos
	for(j=0; j < photos.length; j++){ //This loop runs by all excluded friends
		if(excludedFriendsURL[j] == photos[i].parentNode.href) //Comparing URL's wit href from the photos
			photos[i].parentNode.href = piratePhotos[Math.floor((Math.random()*piratePhotos.length)+1)];
            // In case we find that both URL are equal, we change the identied photo to a new one
	}
}

// </Script>

// arquivo fotos dos piratas
// arquivo de URL dos excluídos
