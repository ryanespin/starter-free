import { FontAwesomeIcon as FontAwesomeIconBase } from '@fortawesome/react-native-fontawesome'
import { faElevator } from '@fortawesome/free-solid-svg-icons'
import { GetProps, SizeTokens, styled } from 'tamagui'

export const FontAwesomeIcon = styled(
  FontAwesomeIconBase,
  {
    name: 'FontAwesomeIcon',
    color: '$color',
  },
  {
    accept: {
      color: 'color',
      secondaryColor: 'color',
      size: 'size',
      style: 'style',
    },
  }
)

export type FontAwesomeIconProps = Omit<GetProps<typeof FontAwesomeIcon>, 'size'> & {
  size?: SizeTokens
}

const Test = <FontAwesomeIcon icon={faElevator} size="$4" />
