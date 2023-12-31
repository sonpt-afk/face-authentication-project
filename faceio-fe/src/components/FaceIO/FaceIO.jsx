/* eslint-disable no-undef */
import { useState,useEffect } from 'react'
import './FaceIO.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FaceIO() {
  const nav = useNavigate()

  let faceioInstance = null

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//cdn.faceio.net/fio.js'
    script.async = true
    script.onload = () => loaded()
    document.body.appendChild(script)
  
    return () => {
      document.body.removeChild(script)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const loaded = () => {
    // eslint-disable-next-line no-undef
    console.log(faceIO)
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('fioab38b')
    }
  }


  const faceRegistration = async () => {
    try {
      const userInfo = await faceioInstance.enroll({
        locale: "auto",
        payload: {
          email: "sonbappe89@gmail.com",
          userId: "2002-id-sonpt",
          username: "sonpt",
        },
      })


      console.log(userInfo)
      console.log('Unique Facial ID: ', userInfo.facialId)
      console.log('Enrollment Date: ', userInfo.timestamp)
      console.log('Gender: ', userInfo.details.gender)
      console.log('Age Approximation: ', userInfo.details.age)
    }
      catch (errorCode) {
        console.log(errorCode)
        handleError(errorCode)
      }
    }

  
  //Function xác thực, nhận diện một khuôn mặt đã tồn tại trong hệ thống:
  const faceSignIn = async () => {
    try {
      console.log(faceioInstance)
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      })
      console.log(userData)
  
      console.log('Unique Facial ID: ', userData.facialId)
      console.log('PayLoad: ', userData.payload)
      nav('/admin-auth')
    } catch (errorCode) {
      console.log(errorCode)
      handleError(errorCode)
    }
  }

  //Phần xử lý lỗi (Handle Error)
  const handleError = (errCode) => {
    // Log all possible error codes during user interaction..
    // Refer to: https://faceio.net/integration-guide#error-codes
    // for a detailed overview when these errors are triggered.
    const fioErrCode = {
      PERMISSION_REFUSED: 1,
      NO_FACES_DETECTED: 2,
      UNRECOGNIZED_FACE: 3,
      MANY_FACES: 4,
      PAD_ATTACK: 5,
      FACE_MISMATCH: 6,
      NETWORK_IO: 7,
      WRONG_PIN_CODE: 8,
      PROCESSING_ERR: 9,
      UNAUTHORIZED: 10,
      TERMS_NOT_ACCEPTED: 11,
      UI_NOT_READY: 12,
      SESSION_EXPIRED: 13,
      TIMEOUT: 14,
      TOO_MANY_REQUESTS: 15,
      EMPTY_ORIGIN: 16,
      FORBIDDDEN_ORIGIN: 17,
      FORBIDDDEN_COUNTRY: 18,
      UNIQUE_PIN_REQUIRED: 19,
      SESSION_IN_PROGRESS: 20,
      FACE_DUPLICATION: 21,
      MINORS_NOT_ALLOWED: 22
  }
    switch (errCode) {
      case fioErrCode.PERMISSION_REFUSED:
        console.log("Access to the Camera stream was denied by the end user")
        break
      case fioErrCode.NO_FACES_DETECTED:
        console.log("No faces were detected during the enroll or authentication process")
        break
      case fioErrCode.UNRECOGNIZED_FACE:
        console.log("Unrecognized face on this application's Facial Index")
        break
      case fioErrCode.MANY_FACES:
        console.log("Two or more faces were detected during the scan process")
        break
      case fioErrCode.PAD_ATTACK:
        console.log("Presentation (Spoof) Attack (PAD) detected during the scan process")
        break
      case fioErrCode.FACE_MISMATCH:
        console.log("Calculated Facial Vectors of the user being enrolled do not matches")
        break
      case fioErrCode.WRONG_PIN_CODE:
        console.log("Wrong PIN code supplied by the user being authenticated")
        break
      case fioErrCode.PROCESSING_ERR:
        console.log("Server side error")
        break
      case fioErrCode.UNAUTHORIZED:
        console.log("Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information")
        break
      case fioErrCode.TERMS_NOT_ACCEPTED:
        console.log("Terms & Conditions set out by FACEIO/host application rejected by the end user")
        break
      case fioErrCode.UI_NOT_READY:
        console.log("The FACEIO Widget code could not be (or is being) injected onto the client DOM")
        break
      case fioErrCode.SESSION_EXPIRED:
        console.log("Client session expired. The first promise was already fulfilled but the host application failed to act accordingly")
        break
      case fioErrCode.TIMEOUT:
        console.log("Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)")
        break
      case fioErrCode.TOO_MANY_REQUESTS:
        console.log("Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications")
        break
      case fioErrCode.EMPTY_ORIGIN:
        console.log("Origin or Referer HTTP request header is empty or missing")
        break
      case fioErrCode.FORBIDDDEN_ORIGIN:
        console.log("Domain origin is forbidden from instantiating fio.js")
        break
      case fioErrCode.FORBIDDDEN_COUNTRY:
        console.log("Country ISO-3166-1 Code is forbidden from instantiating fio.js")
        break
      case fioErrCode.SESSION_IN_PROGRESS:
        console.log("Another authentication or enrollment session is in progress")
        break
      case fioErrCode.NETWORK_IO:
      default:
        console.log("Error while establishing network connection with the target FACEIO processing node")
        break
    }
  }
  return (
    <div className="faceio">
      <div className="app-img">
      <img className="faceio-img" src="https://faceio.net/images/fioauth.png" alt="" />
      </div>
      <div className="faceio-content">
      <h1>Truy cập hệ thống</h1>
      <button className="action face-registration" onClick={faceRegistration}>Đăng kí khuôn mặt</button>
      <button className="action face-sign-in" onClick={faceSignIn}>Đăng nhập với khuôn mặt</button>
      </div>
     
    </div>
  )
}

export default FaceIO
