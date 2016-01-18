# react-native-async-http

 ###Asynchronous Http Client for Android <br/>
[https://github.com/loopj/android-async-http](https://github.com/loopj/android-async-http)
## Installation

```bash
npm install react-native-async-http@latest --save
```

## Getting started - Android

* In `android/setting.gradle`

```gradle
...
include ':react-native-async-http'
project(':react-native-async-http').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-async-http/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-async-http')
}
```

* register module (in MainActivity.java)

```java
import com.smccz.asynchttp.AsyncHttpAndroidPackage; // <--- import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new AsyncHttpAndroidPackage())         // <------ add here
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "example", null);

    setContentView(mReactRootView);
  }

  ......

}
```