module.exports = {
    name: 'github'.toLowerCase(),
    description: "Owner's github account",
    execute(message, args){
        if(message.member.roles.cache.some(r=>r.name === "Developer/Разработчик")){
            message.channel.send('https://github.com/superalex-dev');
        }
        else{
            message.channel.send('Sorry, you cannot use this command, because you are not developer.')
        }

        
    }
}