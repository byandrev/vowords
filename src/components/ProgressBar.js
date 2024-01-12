import { Slider } from "@nextui-org/react"

function ProgressBar({ current, limit }) {
  return (
    <div className="mb-4">
      <Slider   
        size="md"
        step={1}
        isDisabled
        color="primary.100"
        label="Progreso"
        showSteps={true} 
        maxValue={limit} 
        minValue={0} 
        value={current}
        className="w-full" 
      />
    </div>
  )
}

export default ProgressBar
