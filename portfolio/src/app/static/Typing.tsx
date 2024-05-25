import {TypeAnimation} from 'react-type-animation';

function Typing (){
    return (
        <TypeAnimation
            sequence={[
                'Next.js',
                500,
                'Java',
                500,
                'React.js',
                500,
                'Python',
                500


            ]}
            wrapper="span"
            speed={10}
            preRenderFirstString={true}
            style={{marginLeft: '5px', fontSize:'1em', textAlign: 'left', color: '#84ffff', fontWeight:'bold', display: 'inline-block', width: '38.5%'}}
            repeat={1}


        />
    );

};

export default Typing;