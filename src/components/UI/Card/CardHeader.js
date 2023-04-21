import 'bootstrap/dist/css/bootstrap.min.css';


const CardHeader = ({ headerList }) => {
    return (
        <div className='card-component m-2'>
            <div className="card">
                <div className="card-header row">
                    {headerList.map((h) => (
                        <div className="col-sm" key={h}>
                            <strong>{h}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  };
  
export default CardHeader;