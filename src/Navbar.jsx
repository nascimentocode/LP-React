import "./index.css"

function Navbar() {
    return (
        <nav>
            <a href="/" className="active">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
        </nav>
    )
}

export default Navbar