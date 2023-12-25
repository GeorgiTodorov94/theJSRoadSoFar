function songs(array) {

    let songsCount = array.shift();
    let globalTypeList = String(array.pop())
    let myObj = {};


    // for (let index of array) {
    //     console.log(index)
    //     let currentArray = array[index].split('_')        
    // }
    for (let i = 0; i < array.length; i++) {

        let currentArray = array[i].split('_')
        
        let [typeList, songName, lengthOfSong] = currentArray
        
        if (globalTypeList === 'all') {
            myObj.songName = songName
            console.log(myObj.songName)
        }
        if (typeList === globalTypeList) {
            myObj.songName = songName
            console.log(myObj.songName)
        }
        
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'all']);
console.log('----------------');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
console.log('--------------');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)