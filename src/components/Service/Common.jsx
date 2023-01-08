let Obj = {}

Obj.isDesktop = () => {
  return (window.innerWidth >= 1025) ? true : false
}

export default Obj