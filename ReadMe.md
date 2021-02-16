# RN Weather App

# API 사용 방식

```javascript
Request => `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

Location.getCurrentPositionAsync()로 가져온 데이터 중 latitude, longitude를
lat , lon 쿼리에 전달해주면 됩니다.

API 제공 홈페이지에서 MY API KEY 에 접근하시면 내 API 키를 가져올 수 있습니다.

```

# 프로젝트 모습

![image](https://user-images.githubusercontent.com/48292190/108060425-31efb680-709a-11eb-9cb9-fc9c399ce456.png)
<br />
<strike>온도가 같은 이유는 같은 날에 테스트용으로 찍어서...</strike>

# 기술 스택

![image](https://img.shields.io/badge/-React%20Native-blue)
![image](https://img.shields.io/badge/-Expo-black)
![image](https://img.shields.io/badge/-Axios-lightgrey)
![image](https://img.shields.io/badge/-prop--types-blue)

# 느낀 점

태어나서 처음으로 앱 개발을 해보았다. 생각보다 어려운 면도 있었고 쉬운 면도 있었다. 리액트 네이티브를 해봤는데, 전부터 리액트를 해와서 그런건진 모르겠는데 리액트 네이티브가 친숙하고 쉽게 다가왔다.
하지만 그 익숙함에 속아 자꾸 리액트랑 같다고 생각하여 실수를 하는 경우가 많았다. 대표적인 예가 텍스트를 쓸려면 Text태그를 써야한다는 점과 CSS가 좀 다르다는점.

아무튼 되게 신기한 경험이였다. 다음에는 Flutter로 좀 더 다양한 경험을 해보고싶다.
