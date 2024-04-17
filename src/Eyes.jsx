export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
      <circle 
        r={eyeRadius}
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
      />
      <circle 
        r={eyeRadius}
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
      />
    </>
)