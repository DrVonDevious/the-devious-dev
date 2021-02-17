import { useMediaQuery } from "react-responsive"

export default () => {
  let deviceData = {
    isDesktop: true,
    isWidescreen: false,
    isMobileSize: false,
    isMobileDivice: false,
    isPortrait: false,
    isRetina: false,
  }

  if (useMediaQuery({ query: "(min-device-width: 1224px)" })) {
    deviceData.isDesktop = true
  }

  if (useMediaQuery({ query: "(min-device-width: 1824px)" })) {
    deviceData.isWidescreen = true
  }

  if (useMediaQuery({ query: "(max-width: 1224px)" })) {
    deviceData.isMobileSize = true
  }

  if (useMediaQuery({ query: "(max-device-width: 1224px)" })) {
    deviceData.isMobileDevice = true
    deviceData.isDesktop = false
  }

  if (useMediaQuery({ query: "(orientation: portrait)" })) {
    deviceData.isPortrait = true
  } else {
    deviceData.isPortrait = false
  }

  if (useMediaQuery({ query: "(min-resolution: 2dppx)" })) {
    deviceData.isRetina = true
  }

  return deviceData
}
