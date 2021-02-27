import React,{ useContext,useState }   from 'react';
import Qrcode                          from 'qrcode.react';
import Barcode1                        from 'react-barcode';
import { context }                     from '../../context.js';

var array   = [];
var array1  = [];

const Display = (props) => {
	const { state,dispatch } = useContext(context);
	const [inform,setInform] = useState(false);
	const [flag,setFlag]     = useState(false);
	if(flag === false){
		array  = [];
		array1 = [];
		for (var i=0;i< state.amount.length;i++){
			array = {...state.amount[i]};
			console.log(array,props.group,array.grouping);
			if(array1.indexOf(array.give) < 0 && props.group === array.grouping)
				array1.push(array.give)
			if(array1.indexOf(array.recieve) < 0 && props.group === array.grouping)
				array1.push(array.recieve)
			console.log(array1)
		}
		setFlag(true);
	}


	return(	
		<div>
			{flag? 
			<div className='userinfo1'>
				<div>
					<Barcode1  className='barcode2' value={JSON.stringify(array1)}
						format='grai' displayValue={false} marginLeft={650} background='#E2E8DB' textAlign='center' width={0.2}/>
				</div>
				<div className='barcodetext'>Please Scan barcode</div>
			</div>
			:null}
			{flag? 
			<div className='userinfo1'>
				<div>
					<Qrcode  className='barcode1' value={JSON.stringify(array1)}
						 displayValue={false}  />
				</div>
				<div className='barcodetext'>Please Scan QRcode</div>
			</div>
			:null}
		</div>
		);
}

export default Display;
