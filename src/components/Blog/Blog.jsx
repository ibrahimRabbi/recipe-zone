import React from 'react';
import ReactToPdf from 'react-to-pdf'
const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='mt-5 m-auto w-[70%]'>
            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold' >difference between controlled and uncontrolled component</h1>
                <p className='pl-3 mt-2'>the controllrd componet means the component we have control over .the component that can exchange data,props as we like
                    <br />
                    the uncontrolled component means Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM
                </p>
            </div>
            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>how to validate react props using proptypes</h1>
                <p className='pl-3 mt-2'>fast of all we install propTypes node pakage then execute this --
                    <code>
                        {
                            `ReactComponent.propTypes = {
                        booleanProp: PropTypes.bool,
                        numberProp: PropTypes.number,
                        stringProp: PropTypes.string,
                        functionProp: PropTypes.func,
                        arrayProp: PropTypes.array,
                        objectPerop: PropTypes.object,
                        }`
                       }
                       
                    </code> 
                </p>
            </div>

            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>difference between nodeJS and expressJS ?</h1>
                <p className='pl-3 mt-2'>Node js is a back-end server JavaScript runtime environment
                    <br />
                    and express is a Node js framewrok that we have a more efficiant and developer friendly
                </p>
            </div>
            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>what is a coustom hook and why create coustom hook?</h1>
                <p className='pl-3 mt-2'>we create coustom hook ..when smiller or common data and functionlity need divers to another component</p>
            </div>
        </div>
        // <div>
        //     <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        //         {({ toPdf }) => (
        //             <button className='bg-purple-500 p-2 text-slate-50 rounded-md' onClick={toPdf}>Generate pdf</button>
        //         )}
        //     </ReactToPdf>
        //     <div style={{ width: 500, height: 500, background: 'blue' }} ref={ref} />
        // </div>
    );
};

export default Blog;