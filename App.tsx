/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import {Platform} from 'react-native';

import {SafeAreaView, View, Button, ViewProps, StatusBar} from 'react-native';

import {EngineView, useEngine} from '@babylonjs/react-native';
import {SceneLoader} from '@babylonjs/core/Loading/sceneLoader';
import {Camera} from '@babylonjs/core/Cameras/camera';
import {ArcRotateCamera} from '@babylonjs/core/Cameras/arcRotateCamera';
import '@babylonjs/loaders/glTF';
import {Scene} from '@babylonjs/core/scene';
import {WebXRSessionManager, WebXRTrackingState} from '@babylonjs/core/XR';
import {ActionManager, ExecuteCodeAction} from '@babylonjs/core';

const isAndroid = Platform.OS === 'android';
const assetPrefix = isAndroid ? 'custom/' : '';

function resolveAssetUri(path: string) {
  return `app:///${assetPrefix}${path}`;
}

const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();
  const [xrSession, setXrSession] = useState<WebXRSessionManager>();
  const [trackingState, setTrackingState] = useState<WebXRTrackingState>();
  const [scene, setScene] = useState<Scene>();

  const onToggleXr = useCallback(() => {
    (async () => {
      if (xrSession) {
        await xrSession.exitXRAsync();
      } else {
        if (scene !== undefined) {
          const xr = await scene.createDefaultXRExperienceAsync({
            disableDefaultUI: true,
            disableTeleportation: true,
          });
          const session = await xr.baseExperience.enterXRAsync(
            'immersive-ar',
            'unbounded',
            xr.renderTarget,
          );
          setXrSession(session);
          session.onXRSessionEnded.add(() => {
            setXrSession(undefined);
            setTrackingState(undefined);
          });

          setTrackingState(xr.baseExperience.camera.trackingState);
          xr.baseExperience.camera.onTrackingStateChanged.add(
            newTrackingState => {
              setTrackingState(newTrackingState);
            },
          );
        }
      }
    })();
  }, [scene, xrSession]);

  useEffect(() => {
    if (engine) {
      //https://raw.githubusercontent.com/YUFOHON/babylon/main/assets/Bruce/Bruce.glb

      // const bruce='https://raw.githubusercontent.com/YUFOHON/babylon/main/assets/Bruce/Bruce.glb'
      //  const modelPath=resolveAssetUri("assets/Bruce/Bruce.glb")
      // const modelPath = resolveAssetUri('assets/women/test.gltf');
      const girl =
        'https://raw.githubusercontent.com/YUFOHON/babylon/main/assets/girl/girl_laugh_idle_angry_clapping.glb';

      SceneLoader.LoadAsync(girl, undefined, engine).then(loadScene => {
        // console.log(
        //   '🚀 ~ file: App.tsx:84 ~ SceneLoader.LoadAsync ~ loadScene:',
        //   loadScene.animatables[0],
        // );

        setScene(loadScene);
        loadScene.createDefaultCameraOrLight(true, undefined, true);
        (loadScene.activeCamera as ArcRotateCamera).alpha += Math.PI;
        (loadScene.activeCamera as ArcRotateCamera).radius = 10;
        setCamera(loadScene.activeCamera!);

        //Get the Samba animation Group
        const laughAnim = loadScene.getAnimationGroupByName('laugh');
        const angryAnim = loadScene.getAnimationGroupByName('angry');
        const clappingAnim = loadScene.getAnimationGroupByName('Clapping');
        const idleAnim = loadScene.getAnimationGroupByName('idle');

        // console.log("🚀 ~ file: App.tsx:98 ~ SceneLoader.LoadAsync ~ laughAnim:", laughAnim)

        //Play the Samba animation
        idleAnim.start(true, 1.0, idleAnim.from, idleAnim.to, false);

        loadScene.meshes.forEach(mesh => {
            mesh.actionManager = new ActionManager();

            mesh.actionManager.registerAction(
              new ExecuteCodeAction(ActionManager.OnPickTrigger, function () {
                console.warn('CLICK');
                laughAnim.start(true, 1.0, laughAnim.from, laughAnim.to, false);
              }),
            );
            mesh.actionManager.registerAction(
              new ExecuteCodeAction(
                ActionManager.OnPointerOverTrigger,
                function () {
                  // console.warn('HOVER');
                },
              ),
            );
            mesh.actionManager.registerAction(
              new ExecuteCodeAction(
                ActionManager.OnPointerOutTrigger,
                function () {
                  // console.warn('HOVER EXIT');
                },
              ),
            );
          });

          console.log('MODELS LOADED');



      });
    }
  }, [engine]);

  return (
    <>
      <View style={props.style}>
        <Button
          title={xrSession ? 'Stop XR' : 'Start XR'}
          onPress={onToggleXr}
        />
        <View style={{flex: 1}}>
          <EngineView camera={camera} displayFrameRate={true} />
        </View>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <EngineScreen style={{flex: 1}} />
      </SafeAreaView>
    </>
  );
};

export default App;
