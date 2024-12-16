function areYouPlayingBanjo(name) {
    name.split("")
    if(name[0] === "r"|| name[0]=== "R"){
        console.log(`${name} plays`)
        return `${name} plays`
    }else{
        console.log(`${name} does not `)
        return `${name} does not `
    }
    
  }

  areYouPlayingBanjo("rathan")