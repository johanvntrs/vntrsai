interface ProcessStepsProps {
  steps: string[];
  title?: string;
}

export function ProcessSteps({ steps, title }: ProcessStepsProps) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      )}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-medium">
              {index + 1}
            </div>
            <span className="ml-3 text-gray-900 font-medium">{step}</span>
            {index < steps.length - 1 && (
              <svg
                className="hidden lg:block ml-4 w-5 h-5 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
