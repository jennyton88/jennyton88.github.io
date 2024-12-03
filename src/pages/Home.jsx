import Mainbar from '../components/Mainbar.jsx';

function Home() {
    return (
        <div className="container">
            <div className='centered-box'>
                <h1
                    style={{
                        paddingBottom: '30px',
                        borderBottom: '1px solid #81c200'
                    }}>Jenny Ton
                </h1>
                <Mainbar />
            </div>
        </div>
      );
}

export default Home;