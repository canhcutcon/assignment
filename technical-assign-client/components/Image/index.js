import ImageNext from 'next/future/image'
// next/future/image
import styled, { css } from 'styled-components'
import ClientRender from '../ClientRender'

const Icon = styled(ImageNext)`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  cursor: ${(props) => props.cursor};
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  ${(props) =>
    props.ratio
      ? css`
          aspect-ratio: ${(props) => props.ratio || 'unset'};
        `
      : css`
          height: ${(props) => props.height};
        `}
`

const Img = styled.img`
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  cursor: ${(props) => props.cursor};
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  ${(props) =>
    props.ratio
      ? css`
          aspect-ratio: ${(props) => props.ratio || 'unset'};
        `
      : css`
          height: ${(props) => props.height};
        `}
`

const Image = ({ width = 20, height, ratio = null, radius = 'unset', cursor = 'default', src = '', alt = '', ...rest }) => {
  const h = typeof src === 'string' ? height : height || 20
  return (
    <ClientRender>
      {typeof src === 'string' ? (
        <Img
          src={typeof src === 'string' ? encodeURI(src) : src}
          ratio={ratio}
          width={!width.toString().includes('%') ? `${width}px` : width}
          height={ratio ? 'auto' : !`${h}`.includes('%') ? `${h}px` : h}
          radius={radius}
          cursor={cursor}
          alt={alt}
          {...rest}
        />
      ) : (
        <Icon
          layout='raw'
          ratio={ratio}
          src={typeof src === 'string' ? encodeURI(src) : src}
          width={!width.toString().includes('%') ? `${width}px` : width}
          height={ratio && !`${h}`.includes('%') ? `${h}px` : h}
          radius={radius}
          cursor={cursor}
          alt={alt}
          {...rest}
        />
      )}
    </ClientRender>
  )
}

export default Image
