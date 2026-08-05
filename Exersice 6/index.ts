enum UserRole {
    superAdmin = "SuperAdmin",
    moderator = "Moderator",
    viewer = "Viewer"
}

function canEdit(role: UserRole){
    if(role === UserRole.viewer ){
        return false
    }else{
        return true
    }
}

// console.log(canEdit(UserRole.viewer))
// console.log(canEdit(UserRole.moderator))
console.log(canEdit(UserRole.superAdmin))

const btn = document.querySelector("button") as HTMLButtonElement

btn.disabled = true