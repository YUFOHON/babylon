import React, {FunctionComponent, useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {SafeAreaView,Text, View, ViewProps, ActivityIndicator} from 'react-native';
import {EngineView, useEngine} from '@babylonjs/react-native';
import {SceneLoader} from '@babylonjs/core/Loading/sceneLoader';
import {Camera} from '@babylonjs/core/Cameras/camera';
import {ArcRotateCamera} from '@babylonjs/core/Cameras/arcRotateCamera';
import '@babylonjs/loaders/glTF';
import {Scene} from '@babylonjs/core/scene';
import {
  ActionManager,
  ExecuteCodeAction,
  Color4,
  Vector3,
} from '@babylonjs/core';
const isAndroid = Platform.OS === 'android';
const assetPrefix = isAndroid ? 'custom/' : '';
let isLoading = true;

function resolveAssetUri(path: string) {
  return `app:///${assetPrefix}${path}`;
}

interface ILoadingScreen {
  //What happens when loading starts
  displayLoadingUI: () => void;
  //What happens when loading stops
  hideLoadingUI: () => void;
  //default loader support. Optional!
  loadingUIBackgroundColor: string;
  loadingUIText: string;
}
class CustomLoadingScreen implements ILoadingScreen {
  //optional, but needed due to interface definitions
  public loadingUIBackgroundColor: string = 'white';
  constructor(public loadingUIText: string) {}
  public displayLoadingUI() {
    console.warn(this.loadingUIText);
    // <Ionicons name="md-checkmark-circle" size={32} color="green" />
  }

  public hideLoadingUI() {
    console.warn('Loaded!');
    isLoading = false;
  }
}
const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();
  const [scene, setScene] = useState<Scene>();

  useEffect(() => {
    console.log('enter model component');
    if (engine) {
      // console.log('🚀 ~ file: model.tsx:27 ~ useEffect ~ engine:', engine);
      var loadingScreen = new CustomLoadingScreen("I'm loading!!");
      engine.loadingScreen = loadingScreen;
      engine.displayLoadingUI();
      const girl =
        // 'https://raw.githubusercontent.com/YUFOHON/babylon/main/assets/girl/girl_laugh_idle_angry_clapping.glb';
        'https://raw.githubusercontent.com/YUFOHON/babylon/main/assets/girl/realGirl.glb';

      SceneLoader.LoadAsync(girl, undefined, engine).then(loadScene => {
        engine.hideLoadingUI();

        // const morphTarget_mouthOpen = loadScene
        //   .getMeshById('Wolf3D_Head.001')!
        //   .morphTargetManager?.getTarget(0);
        // const morphTarget_smile = loadScene
        //   .getMeshById('Wolf3D_Head.001')!
        //   .morphTargetManager?.getTarget(1);
        // morphTarget_mouthOpen!.influence = 1;
        // morphTarget_smile!.influence = 1;
        loadScene.clearColor = new Color4(1, 1, 1, 1);
        setScene(loadScene);
        loadScene.createDefaultCameraOrLight(true, undefined, true);
        (loadScene.activeCamera as ArcRotateCamera).alpha += Math.PI;
        (loadScene.activeCamera as ArcRotateCamera).radius = 5;
        setCamera(loadScene.activeCamera!);

        // const talkAnim = loadScene.getAnimationGroupByName('Female_Talk')!;
        // const laughAnim = loadScene.getAnimationGroupByName('laugh')!;
        // const angryAnim = loadScene.getAnimationGroupByName('angry')!;
        // const clappingAnim = loadScene.getAnimationGroupByName('Clapping')!;
        // const idleAnim = loadScene.getAnimationGroupByName('idle')!;
        // loadScene.meshes.forEach(mesh => {
        //   mesh.actionManager = new ActionManager();
        //   mesh.actionManager.registerAction(
        //     new ExecuteCodeAction(ActionManager.OnPickTrigger, function () {
        //       console.warn('CLICK');
        //       talkAnim.start(true, 1.0, talkAnim.from, talkAnim.to, false);
        //     }),
        //   );
        // });

        // loadScene.meshes.forEach(mesh => {
        //   mesh.actionManager = new ActionManager();

        //   mesh.actionManager.registerAction(
        //     new ExecuteCodeAction(ActionManager.OnPickTrigger, function () {
        //       console.warn('CLICK');
        //       laughAnim.start(true, 1.0, laughAnim.from, laughAnim.to, false);
        //     }),
        //   );
        //   mesh.actionManager.registerAction(
        //     new ExecuteCodeAction(
        //       ActionManager.OnPointerOverTrigger,
        //       function () {
        //         // console.warn('HOVER');
        //       },
        //     ),
        //   );
        //   mesh.actionManager.registerAction(
        //     new ExecuteCodeAction(
        //       ActionManager.OnPointerOutTrigger,
        //       function () {
        //         // console.warn('HOVER EXIT');
        //       },
        //     ),
        //   );
        // });

        console.log('MODELS LOADED');
      });
    }
    console.log('exit model component');
  }, [engine]);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={props.style}>
          <View style={{flex: 1}}>
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text>Loading...</Text>
                <ActivityIndicator size={50} color="#000000" />
              </View>
            ) : (
              <></>
            )}
            <EngineView
              camera={camera}
              displayFrameRate={true}
              isTransparent={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EngineScreen;
