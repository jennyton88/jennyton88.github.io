function Header({ header_data }) {
    return (
        <header>
            <h1 className='front-name'>{header_data}</h1>
            <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
        </header>
    );
}

export default Header;