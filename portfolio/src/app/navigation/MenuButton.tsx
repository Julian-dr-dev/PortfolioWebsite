
const MenuButton = ({title}:{title:string}) => {
    return <a href={"/#"+title}>{title}</a>;
}

export default MenuButton;