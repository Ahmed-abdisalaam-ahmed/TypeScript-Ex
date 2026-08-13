interface welcoming {
    username:string
    isPremium?:boolean
}
const welcome = (props : welcoming) => {
  return (
    <div>
        <p>{props.username.toUpperCase()}</p>
        <p>{props.isPremium? "Welcome back, premium user!" : "Welcome, guest"}</p>
    </div>
  )
}

export default welcome