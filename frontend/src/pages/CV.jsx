

function CV() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6">
      
      <div className="w-full max-w-5xl">
        
        

        {/* CV VIEWER */}
        <div className="mt-6 h-[90vh] w-full rounded-2xl overflow-hidden border border-zinc-800">
          <iframe
            src="/CV/Alfredcv.pdf"
            className="w-full h-full"
            title="CV Viewer"
          />
        </div>

      </div>
    </div>
  );
}

export default CV;