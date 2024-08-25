import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl bg-white rounded-xl shadow-lg p-8 lg:p-16">
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            className="rounded-full shadow-lg"
            src="/shahbaz.jpeg" 
            alt="Profile picture"  
            width={250}  
            height={250}  
            priority
          />
        </div>
        
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center lg:pl-10 text-center lg:text-left">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">
            ML Engineer
            <span className="inline-block transition-transform transform group-hover:translate-x-1 motion-reduce:transform-none">
              {" "} -&gt;
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            I am currently learning MLOps, which stands for Machine Learning Operations.
            MLOps is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently.
            It integrates the fields of machine learning and DevOps, focusing on automation, continuous integration/continuous deployment (CI/CD),
            and monitoring of models. By learning MLOps, I am gaining the skills necessary to streamline the entire machine learning lifecycle, 
            from development to deployment and beyond.
          </p>
        </div>
      </div>
    </main>
  );
}
