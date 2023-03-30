
import imageOne from '/src/assets/Girl.png'
import imageTwo from "/src/assets/Man.png";
import imageThree from '/src/assets/YoungWomen.png';

const Illust  = [{

  id:1,
  heading:'Hello weorl; fdsf',
  text:'The reason we  used real text, it would possibly distract from the DESIGN of a page (or indeed, might even be mistakenly inappropriate. Or if we used something like "Insert Text Here...", this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text.',
  image:imageOne
},
{
id:2,
heading:'Hello weorl; fdsf',
text:'The reason we use Lorem Ipsum is sim sibly distract from the DESIGN of a page (or indeed, might even be mistakenly inappropriate. Or if we used something like "Insert Text Here...", this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text.',
image:imageTwo
},
{

  id:3,
  heading:'Hello weorl; fdsf',
  text:'The reason we use Lorem Ipsum is simple. If we used real text, it would possibly distract from the mistakenly inappropriate. Or if we used something like "Insert Text Here...", this would also distract from the design. Using Lorem Ipsum allows us to SEE the design without being distracted by readable or unrealistic text.',
   image:imageThree

}




];


export const SectionOne = () => {
  return (
    <>

    <div className='mt-7 '>
        <h2 className='text-center text-3xl sm:text-5xl'>We Provide Excellent Service to meet your needs.</h2>

   
    <ul className='grid gird-cols-2 md:grid-cols-3 gap-8 mt-12  items-baseline '>

     {Illust.map((ills)=>(
       
       <li key={ills.id} className=' max-w-[450px] mx-auto shadow-2xl ring-1 ring-gray-900/5 rounded-2xl '>
         <div className=' '>

        <img src={ills.image} alt={ills.text} className='w-[250px] mx-auto' />
        <h1 className='font-bold  text-[2rem] text-center'>{ills.heading}</h1>
        <div className=' p-4 '>

        <p>{ills.text}</p>
        </div>
      </div>
      </li>
     ))}

     </ul>


    </div>
    </>
  )
}
