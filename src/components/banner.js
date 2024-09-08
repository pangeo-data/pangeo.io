import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react'

export const Banner = ({ title, description, children }) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Box pt={16} px={20}>
      <Alert
        status='info'
        variant='subtle'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
      >
        <AlertIcon />

        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        {children}

        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>
    </Box>
  ) : (
    <></>
  )
}
