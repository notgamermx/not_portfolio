// Destructure hooks from the global React object
const { useState, useEffect, useRef } = React;

// --- SVG Icon Components ---
const IconMail = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const IconLinkedin = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const IconGithub = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 2h-3a5 5 0 0 0-5 5c0 1 .2 2.2 1 3.5a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const IconCode = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const IconCamera = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
    </svg>
);

const IconYoutube = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

const IconSparkles = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" />
        <path d="M9 14C10.6569 14 12 12.6569 12 11C12 9.34315 10.6569 8 9 8C7.34315 8 6 9.34315 6 11C6 12.6569 7.34315 14 9 14Z" />
        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" />
    </svg>
);

const IconUser = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const IconZap = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

const IconArrowDown = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
);

const IconExternalLink = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

const IconBriefcase = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);


const hyperspeedPresets = {
    one: {
        onSpeedUp: () => { },
        onSlowDown: () => { },
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 3,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3
        }
    }
};
const Hyperspeed = ({ effectOptions, scriptsLoaded }) => {
    const hyperspeed = useRef(null);
    const appRef = useRef(null);

    useEffect(() => {
        if (!scriptsLoaded) return;

        const THREE = window.THREE;
        const { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } = window.POSTPROCESSING;

        const mountainUniforms = {
            uFreq: { value: new THREE.Vector3(3, 6, 10) },
            uAmp: { value: new THREE.Vector3(30, 30, 20) }
        };

        const xyUniforms = {
            uFreq: { value: new THREE.Vector2(5, 2) },
            uAmp: { value: new THREE.Vector2(25, 15) }
        };

        const LongRaceUniforms = {
            uFreq: { value: new THREE.Vector2(2, 3) },
            uAmp: { value: new THREE.Vector2(35, 10) }
        };

        const turbulentUniforms = {
            uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
            uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
        };

        const deepUniforms = {
            uFreq: { value: new THREE.Vector2(4, 8) },
            uAmp: { value: new THREE.Vector2(10, 20) },
            uPowY: { value: new THREE.Vector2(20, 2) }
        };

        let nsin = val => Math.sin(val) * 0.5 + 0.5;

        const distortions = {
            mountainDistortion: {
                uniforms: mountainUniforms,
                getDistortion: `
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,
                getJS: (progress, time) => {
                    let movementProgressFix = 0.02;
                    let uFreq = mountainUniforms.uFreq.value;
                    let uAmp = mountainUniforms.uAmp.value;
                    let distortion = new THREE.Vector3(
                        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
                        Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
                        nsin(progress * Math.PI * uFreq.y + time) * uAmp.y -
                        nsin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
                        nsin(progress * Math.PI * uFreq.z + time) * uAmp.z -
                        nsin(movementProgressFix * Math.PI * uFreq.z + time) * uAmp.z
                    );
                    let lookAtAmp = new THREE.Vector3(2, 2, 2);
                    let lookAtOffset = new THREE.Vector3(0, 0, -5);
                    return distortion.multiply(lookAtAmp).add(lookAtOffset);
                }
            },
            xyDistortion: {
                uniforms: xyUniforms,
                getDistortion: `
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,
                getJS: (progress, time) => {
                    let movementProgressFix = 0.02;
                    let uFreq = xyUniforms.uFreq.value;
                    let uAmp = xyUniforms.uAmp.value;
                    let distortion = new THREE.Vector3(
                        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x -
                        Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
                        Math.sin(progress * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y -
                        Math.sin(movementProgressFix * Math.PI * uFreq.y + time + Math.PI / 2) * uAmp.y,
                        0
                    );
                    let lookAtAmp = new THREE.Vector3(2, 0.4, 1);
                    let lookAtOffset = new THREE.Vector3(0, 0, -3);
                    return distortion.multiply(lookAtAmp).add(lookAtOffset);
                }
            },
            LongRaceDistortion: {
                uniforms: LongRaceUniforms,
                getDistortion: `
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,
                getJS: (progress, time) => {
                    let camProgress = 0.0125;
                    let uFreq = LongRaceUniforms.uFreq.value;
                    let uAmp = LongRaceUniforms.uAmp.value;
                    let distortion = new THREE.Vector3(
                        Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x -
                        Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
                        Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
                        Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
                        0
                    );
                    let lookAtAmp = new THREE.Vector3(1, 1, 0);
                    let lookAtOffset = new THREE.Vector3(0, 0, -5);
                    return distortion.multiply(lookAtAmp).add(lookAtOffset);
                }
            },
            turbulentDistortion: {
                uniforms: turbulentUniforms,
                getDistortion: `
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,
                getJS: (progress, time) => {
                    const uFreq = turbulentUniforms.uFreq.value;
                    const uAmp = turbulentUniforms.uAmp.value;

                    const getX = p =>
                        Math.cos(Math.PI * p * uFreq.x + time) * uAmp.x +
                        Math.pow(Math.cos(Math.PI * p * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y;

                    const getY = p =>
                        -nsin(Math.PI * p * uFreq.z + time) * uAmp.z -
                        Math.pow(nsin(Math.PI * p * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w;

                    let distortion = new THREE.Vector3(
                        getX(progress) - getX(progress + 0.007),
                        getY(progress) - getY(progress + 0.007),
                        0
                    );
                    let lookAtAmp = new THREE.Vector3(-2, -5, 0);
                    let lookAtOffset = new THREE.Vector3(0, 0, -10);
                    return distortion.multiply(lookAtAmp).add(lookAtOffset);
                }
            },
            turbulentDistortionStill: {
                uniforms: turbulentUniforms,
                getDistortion: `
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `
            },
            deepDistortionStill: {
                uniforms: deepUniforms,
                getDistortion: `
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `
            },
            deepDistortion: {
                uniforms: deepUniforms,
                getDistortion: `
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,
                getJS: (progress, time) => {
                    const uFreq = deepUniforms.uFreq.value;
                    const uAmp = deepUniforms.uAmp.value;
                    const uPowY = deepUniforms.uPowY.value;

                    const getX = p => Math.sin(p * Math.PI * uFreq.x + time) * uAmp.x;
                    const getY = p => Math.pow(p * uPowY.x, uPowY.y) + Math.sin(p * Math.PI * uFreq.y + time) * uAmp.y;

                    let distortion = new THREE.Vector3(
                        getX(progress) - getX(progress + 0.01),
                        getY(progress) - getY(progress + 0.01),
                        0
                    );
                    let lookAtAmp = new THREE.Vector3(-2, -4, 0);
                    let lookAtOffset = new THREE.Vector3(0, 0, -10);
                    return distortion.multiply(lookAtAmp).add(lookAtOffset);
                }
            }
        };
        class App {
            constructor(container, options = {}) {
                this.options = options;
                this.container = container;
                this.renderer = new THREE.WebGLRenderer({
                    antialias: false,
                    alpha: true
                });
                this.renderer.setSize(container.offsetWidth, container.offsetHeight, false);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.composer = new EffectComposer(this.renderer);
                container.append(this.renderer.domElement);

                this.camera = new THREE.PerspectiveCamera(
                    options.fov,
                    container.offsetWidth / container.offsetHeight,
                    0.1,
                    10000
                );
                this.camera.position.z = -5;
                this.camera.position.y = 8;
                this.camera.position.x = 0;
                this.scene = new THREE.Scene();
                this.scene.background = null;

                let fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length * 500);
                this.scene.fog = fog;
                this.fogUniforms = {
                    fogColor: { value: fog.color },
                    fogNear: { value: fog.near },
                    fogFar: { value: fog.far }
                };
                this.clock = new THREE.Clock();
                this.assets = {};
                this.disposed = false;

                this.road = new Road(this, options);
                this.leftCarLights = new CarLights(
                    this,
                    options,
                    options.colors.leftCars,
                    options.movingAwaySpeed,
                    new THREE.Vector2(0, 1 - options.carLightsFade)
                );
                this.rightCarLights = new CarLights(
                    this,
                    options,
                    options.colors.rightCars,
                    options.movingCloserSpeed,
                    new THREE.Vector2(1, 0 + options.carLightsFade)
                );
                this.leftSticks = new LightsSticks(this, options);

                this.fovTarget = options.fov;
                this.speedUpTarget = 0;
                this.speedUp = 0;
                this.timeOffset = 0;

                this.tick = this.tick.bind(this);
                this.init = this.init.bind(this);
                this.setSize = this.setSize.bind(this);
                this.onMouseDown = this.onMouseDown.bind(this);
                this.onMouseUp = this.onMouseUp.bind(this);

                this.onTouchStart = this.onTouchStart.bind(this);
                this.onTouchEnd = this.onTouchEnd.bind(this);
                this.onContextMenu = this.onContextMenu.bind(this);

                window.addEventListener("resize", this.onWindowResize.bind(this));
            }

            onWindowResize() {
                if (!this.container) return;
                const width = this.container.offsetWidth;
                const height = this.container.offsetHeight;

                if (this.renderer) {
                    this.renderer.setSize(width, height);
                }
                if (this.camera) {
                    this.camera.aspect = width / height;
                    this.camera.updateProjectionMatrix();
                }
                if (this.composer) {
                    this.composer.setSize(width, height);
                }
            }

            initPasses() {
                this.renderPass = new RenderPass(this.scene, this.camera);
                this.bloomPass = new EffectPass(
                    this.camera,
                    new BloomEffect({
                        luminanceThreshold: 0.2,
                        luminanceSmoothing: 0,
                        resolutionScale: 1
                    })
                );

                const smaaPass = new EffectPass(
                    this.camera,
                    new SMAAEffect({
                        preset: SMAAPreset.MEDIUM,
                        searchImage: SMAAEffect.searchImageDataURL,
                        areaImage: SMAAEffect.areaImageDataURL
                    })
                );
                this.renderPass.renderToScreen = false;
                this.bloomPass.renderToScreen = false;
                smaaPass.renderToScreen = true;
                this.composer.addPass(this.renderPass);
                this.composer.addPass(this.bloomPass);
                this.composer.addPass(smaaPass);
            }

            loadAssets() {
                const assets = this.assets;
                return new Promise(resolve => {
                    const manager = new THREE.LoadingManager(resolve);

                    const searchImage = new Image();
                    const areaImage = new Image();
                    assets.smaa = {};
                    searchImage.addEventListener("load", function () {
                        assets.smaa.search = this;
                        manager.itemEnd("smaa-search");
                    });

                    areaImage.addEventListener("load", function () {
                        assets.smaa.area = this;
                        manager.itemEnd("smaa-area");
                    });
                    manager.itemStart("smaa-search");
                    manager.itemStart("smaa-area");

                    searchImage.src = SMAAEffect.searchImageDataURL;
                    areaImage.src = SMAAEffect.areaImageDataURL;
                });
            }
            init() {
                this.initPasses();
                const options = this.options;
                this.road.init();
                this.leftCarLights.init();

                this.leftCarLights.mesh.position.setX(-options.roadWidth / 2 - options.islandWidth / 2);
                this.rightCarLights.init();
                this.rightCarLights.mesh.position.setX(options.roadWidth / 2 + options.islandWidth / 2);
                this.leftSticks.init();
                this.leftSticks.mesh.position.setX(-(options.roadWidth + options.islandWidth / 2));

                this.container.addEventListener("mousedown", this.onMouseDown);
                this.container.addEventListener("mouseup", this.onMouseUp);
                this.container.addEventListener("mouseout", this.onMouseUp);

                this.container.addEventListener("touchstart", this.onTouchStart, { passive: true });
                this.container.addEventListener("touchend", this.onTouchEnd, { passive: true });
                this.container.addEventListener("touchcancel", this.onTouchEnd, { passive: true });

                this.container.addEventListener("contextmenu", this.onContextMenu);

                this.tick();
            }

            onMouseDown(ev) {
                if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
                this.fovTarget = this.options.fovSpeedUp;
                this.speedUpTarget = this.options.speedUp;
            }

            onMouseUp(ev) {
                if (this.options.onSlowDown) this.options.onSlowDown(ev);
                this.fovTarget = this.options.fov;
                this.speedUpTarget = 0;
            }

            onTouchStart(ev) {
                if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
                this.fovTarget = this.options.fovSpeedUp;
                this.speedUpTarget = this.options.speedUp;
            }

            onTouchEnd(ev) {
                if (this.options.onSlowDown) this.options.onSlowDown(ev);
                this.fovTarget = this.options.fov;
                this.speedUpTarget = 0;
            }

            onContextMenu(ev) {
                ev.preventDefault();
            }

            update(delta) {
                let lerpPercentage = Math.exp(-(-60 * Math.log2(1 - 0.1)) * delta);
                this.speedUp += lerp(this.speedUp, this.speedUpTarget, lerpPercentage, 0.00001);
                this.timeOffset += this.speedUp * delta;

                let time = this.clock.elapsedTime + this.timeOffset;

                this.rightCarLights.update(time);
                this.leftCarLights.update(time);
                this.leftSticks.update(time);
                this.road.update(time);

                let updateCamera = false;
                let fovChange = lerp(this.camera.fov, this.fovTarget, lerpPercentage);
                if (fovChange !== 0) {
                    this.camera.fov += fovChange * delta * 6;
                    updateCamera = true;
                }

                if (this.options.distortion.getJS) {
                    const distortion = this.options.distortion.getJS(0.025, time);

                    this.camera.lookAt(
                        new THREE.Vector3(
                            this.camera.position.x + distortion.x,
                            this.camera.position.y + distortion.y,
                            this.camera.position.z + distortion.z
                        )
                    );
                    updateCamera = true;
                }
                if (updateCamera) {
                    this.camera.updateProjectionMatrix();
                }
            }

            render(delta) {
                this.composer.render(delta);
            }

            dispose() {
                this.disposed = true;
                window.removeEventListener("resize", this.onWindowResize.bind(this));
                if (this.container) {
                    this.container.removeEventListener("mousedown", this.onMouseDown);
                    this.container.removeEventListener("mouseup", this.onMouseUp);
                    this.container.removeEventListener("mouseout", this.onMouseUp);

                    this.container.removeEventListener("touchstart", this.onTouchStart);
                    this.container.removeEventListener("touchend", this.onTouchEnd);
                    this.container.removeEventListener("touchcancel", this.onTouchEnd);
                    this.container.removeEventListener("contextmenu", this.onContextMenu);
                }

                if (this.renderer) {
                    this.renderer.dispose();
                }
                if (this.composer) {
                    this.composer.dispose();
                }
                if (this.scene) {
                    this.scene.traverse(object => {
                        if (object.geometry) object.geometry.dispose();
                        if (object.material) {
                            if (Array.isArray(object.material)) {
                                object.material.forEach(material => material.dispose());
                            } else {
                                object.material.dispose();
                            }
                        }
                    });
                    this.scene.clear();
                }

                if (this.renderer && this.renderer.domElement.parentElement) {
                    this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
                }

                this.container = null;
                this.renderer = null;
                this.composer = null;
                this.scene = null;
                this.camera = null;
                this.clock = null;
            }

            setSize(width, height, updateStyles) {
                if (this.composer) {
                    this.composer.setSize(width, height, updateStyles);
                }
            }

            tick() {
                if (this.disposed || !this.renderer) return;
                if (resizeRendererToDisplaySize(this.renderer, this.setSize)) {
                    const canvas = this.renderer.domElement;
                    this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
                    this.camera.updateProjectionMatrix();
                }
                const delta = this.clock.getDelta();
                this.render(delta);
                this.update(delta);
                requestAnimationFrame(this.tick);
            }
        }

        const random = base => {
            if (Array.isArray(base)) return Math.random() * (base[1] - base[0]) + base[0];
            return Math.random() * base;
        };

        const pickRandom = arr => {
            if (Array.isArray(arr)) return arr[Math.floor(Math.random() * arr.length)];
            return arr;
        };

        function lerp(current, target, speed = 0.1, limit = 0.001) {
            let change = (target - current) * speed;
            if (Math.abs(change) < limit) {
                change = target - current;
            }
            return change;
        }
        class CarLights {
            constructor(webgl, options, colors, speed, fade) {
                this.webgl = webgl;
                this.options = options;
                this.colors = colors;
                this.speed = speed;
                this.fade = fade;
            }

            init() {
                const options = this.options;
                let curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
                let geometry = new THREE.TubeGeometry(curve, 40, 1, 8, false);

                let instanced = new THREE.InstancedBufferGeometry().copy(geometry);
                instanced.instanceCount = options.lightPairsPerRoadWay * 2;

                let laneWidth = options.roadWidth / options.lanesPerRoad;

                let aOffset = [];
                let aMetrics = [];
                let aColor = [];

                let colors = this.colors;
                if (Array.isArray(colors)) {
                    colors = colors.map(c => new THREE.Color(c));
                } else {
                    colors = new THREE.Color(colors);
                }

                for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
                    let radius = random(options.carLightsRadius);
                    let length = random(options.carLightsLength);
                    let speed = random(this.speed);

                    let carLane = i % options.lanesPerRoad;
                    let laneX = carLane * laneWidth - options.roadWidth / 2 + laneWidth / 2;

                    let carWidth = random(options.carWidthPercentage) * laneWidth;
                    let carShiftX = random(options.carShiftX) * laneWidth;
                    laneX += carShiftX;

                    let offsetY = random(options.carFloorSeparation) + radius * 1.3;

                    let offsetZ = -random(options.length);

                    aOffset.push(laneX - carWidth / 2);
                    aOffset.push(offsetY);
                    aOffset.push(offsetZ);

                    aOffset.push(laneX + carWidth / 2);
                    aOffset.push(offsetY);
                    aOffset.push(offsetZ);

                    aMetrics.push(radius);
                    aMetrics.push(length);
                    aMetrics.push(speed);

                    aMetrics.push(radius);
                    aMetrics.push(length);
                    aMetrics.push(speed);

                    let color = pickRandom(colors);
                    aColor.push(color.r);
                    aColor.push(color.g);
                    aColor.push(color.b);

                    aColor.push(color.r);
                    aColor.push(color.g);
                    aColor.push(color.b);
                }

                instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
                instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
                instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));

                let material = new THREE.ShaderMaterial({
                    fragmentShader: carLightsFragment,
                    vertexShader: carLightsVertex,
                    transparent: true,
                    uniforms: Object.assign(
                        {
                            uTime: { value: 0 },
                            uTravelLength: { value: options.length },
                            uFade: { value: this.fade }
                        },
                        this.webgl.fogUniforms,
                        options.distortion.uniforms
                    )
                });

                material.onBeforeCompile = shader => {
                    shader.vertexShader = shader.vertexShader.replace(
                        "#include <getDistortion_vertex>",
                        options.distortion.getDistortion
                    );
                };

                let mesh = new THREE.Mesh(instanced, material);
                mesh.frustumCulled = false;
                this.webgl.scene.add(mesh);
                this.mesh = mesh;
            }

            update(time) {
                this.mesh.material.uniforms.uTime.value = time;
            }
        }

        const carLightsFragment = `
      #define USE_FOG;
      ${THREE.ShaderChunk['fog_pars_fragment']}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${THREE.ShaderChunk['fog_fragment']}
      }
    `;

        const carLightsVertex = `
      #define USE_FOG;
      ${THREE.ShaderChunk['fog_pars_vertex']}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${THREE.ShaderChunk['fog_vertex']}
      }
    `;
        class LightsSticks {
            constructor(webgl, options) {
                this.webgl = webgl;
                this.options = options;
            }

            init() {
                const options = this.options;
                const geometry = new THREE.PlaneGeometry(1, 1);
                let instanced = new THREE.InstancedBufferGeometry().copy(geometry);
                let totalSticks = options.totalSideLightSticks;
                instanced.instanceCount = totalSticks;

                let stickoffset = options.length / (totalSticks - 1);
                const aOffset = [];
                const aColor = [];
                const aMetrics = [];

                let colors = options.colors.sticks;
                if (Array.isArray(colors)) {
                    colors = colors.map(c => new THREE.Color(c));
                } else {
                    colors = new THREE.Color(colors);
                }

                for (let i = 0; i < totalSticks; i++) {
                    let width = random(options.lightStickWidth);
                    let height = random(options.lightStickHeight);
                    aOffset.push((i - 1) * stickoffset * 2 + stickoffset * Math.random());

                    let color = pickRandom(colors);
                    aColor.push(color.r);
                    aColor.push(color.g);
                    aColor.push(color.b);

                    aMetrics.push(width);
                    aMetrics.push(height);
                }

                instanced.setAttribute("aOffset", new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false));
                instanced.setAttribute("aColor", new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
                instanced.setAttribute("aMetrics", new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false));

                const material = new THREE.ShaderMaterial({
                    fragmentShader: sideSticksFragment,
                    vertexShader: sideSticksVertex,
                    side: THREE.DoubleSide,
                    uniforms: Object.assign(
                        {
                            uTravelLength: { value: options.length },
                            uTime: { value: 0 }
                        },
                        this.webgl.fogUniforms,
                        options.distortion.uniforms
                    )
                });

                material.onBeforeCompile = shader => {
                    shader.vertexShader = shader.vertexShader.replace(
                        "#include <getDistortion_vertex>",
                        options.distortion.getDistortion
                    );
                };

                const mesh = new THREE.Mesh(instanced, material);
                mesh.frustumCulled = false;
                this.webgl.scene.add(mesh);
                this.mesh = mesh;
            }

            update(time) {
                this.mesh.material.uniforms.uTime.value = time;
            }
        }

        const sideSticksVertex = `
      #define USE_FOG;
      ${THREE.ShaderChunk['fog_pars_vertex']}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${THREE.ShaderChunk['fog_vertex']}
      }
    `;

        const sideSticksFragment = `
      #define USE_FOG;
      ${THREE.ShaderChunk['fog_pars_fragment']}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${THREE.ShaderChunk['fog_fragment']}
      }
    `;

        class Road {
            constructor(webgl, options) {
                this.webgl = webgl;
                this.options = options;
                this.uTime = { value: 0 };
            }

            createPlane(side, width, isRoad) {
                const options = this.options;
                let segments = 100;
                const geometry = new THREE.PlaneGeometry(
                    isRoad ? options.roadWidth : options.islandWidth,
                    options.length,
                    20,
                    segments
                );
                let uniforms = {
                    uTravelLength: { value: options.length },
                    uColor: { value: new THREE.Color(isRoad ? options.colors.roadColor : options.colors.islandColor) },
                    uTime: this.uTime
                };

                if (isRoad) {
                    uniforms = Object.assign(uniforms, {
                        uLanes: { value: options.lanesPerRoad },
                        uBrokenLinesColor: { value: new THREE.Color(options.colors.brokenLines) },
                        uShoulderLinesColor: { value: new THREE.Color(options.colors.shoulderLines) },
                        uShoulderLinesWidthPercentage: { value: options.shoulderLinesWidthPercentage },
                        uBrokenLinesLengthPercentage: { value: options.brokenLinesLengthPercentage },
                        uBrokenLinesWidthPercentage: { value: options.brokenLinesWidthPercentage }
                    });
                }

                const material = new THREE.ShaderMaterial({
                    fragmentShader: isRoad ? roadFragment : islandFragment,
                    vertexShader: roadVertex,
                    side: THREE.DoubleSide,
                    uniforms: Object.assign(uniforms, this.webgl.fogUniforms, options.distortion.uniforms)
                });

                material.onBeforeCompile = shader => {
                    shader.vertexShader = shader.vertexShader.replace(
                        "#include <getDistortion_vertex>",
                        options.distortion.getDistortion
                    );
                };

                const mesh = new THREE.Mesh(geometry, material);
                mesh.rotation.x = -Math.PI / 2;
                mesh.position.z = -options.length / 2;
                mesh.position.x += (this.options.islandWidth / 2 + options.roadWidth / 2) * side;
                this.webgl.scene.add(mesh);

                return mesh;
            }

            init() {
                this.leftRoadWay = this.createPlane(-1, this.options.roadWidth, true);
                this.rightRoadWay = this.createPlane(1, this.options.roadWidth, true);
                this.island = this.createPlane(0, this.options.islandWidth, false);
            }

            update(time) {
                this.uTime.value = time;
            }
        }

        const roadBaseFragment = `
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${THREE.ShaderChunk['fog_pars_fragment']}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${THREE.ShaderChunk['fog_fragment']}
      }
    `;

        const islandFragment = roadBaseFragment
            .replace("#include <roadMarkings_fragment>", "")
            .replace("#include <roadMarkings_vars>", "");

        const roadMarkings_vars = `
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `;

        const roadMarkings_fragment = `
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `;

        const roadFragment = roadBaseFragment
            .replace("#include <roadMarkings_fragment>", roadMarkings_fragment)
            .replace("#include <roadMarkings_vars>", roadMarkings_vars);

        const roadVertex = `
      #define USE_FOG;
      uniform float uTime;
      ${THREE.ShaderChunk['fog_pars_vertex']}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${THREE.ShaderChunk['fog_vertex']}
      }
    `;

        function resizeRendererToDisplaySize(renderer, setSize) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                setSize(width, height, false);
            }
            return needResize;
        }

        (function () {
            const container = document.getElementById("lights");
            if (!container) return;

            const options = { ...effectOptions };
            options.distortion = distortions[options.distortion];

            const myApp = new App(container, options);
            appRef.current = myApp;
            try {
                myApp.loadAssets().then(myApp.init);
            } catch (e) {
                console.error("Error loading Hyperspeed assets:", e);
            }
        })();

        return () => {
            if (appRef.current) {
                appRef.current.dispose();
            }
        };
    }, [effectOptions, scriptsLoaded]);

    return <div id="lights" ref={hyperspeed} className="w-full h-full"></div>;
};
const ContinuousThreeScene = ({ scriptsLoaded, apiRef }) => {
    const canvasRef = useRef(null);
    const sceneRef = useRef({
        scene: null,
        camera: null,
        renderer: null,
        figureGroup: null,
        dust: null,
        particles: null,
        pointLight: null,
        resizeObserver: null
    });

    const lerpVal = (a, b, t) => a * (1 - t) + b * t;

    useEffect(() => {
        if (!scriptsLoaded || !canvasRef.current) return;

        const THREE = window.THREE;
        const s = sceneRef.current;

        s.scene = new THREE.Scene();
        s.camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
        s.camera.position.z = 10;
        s.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        s.renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        s.renderer.setPixelRatio(window.devicePixelRatio);

        s.scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        s.pointLight = new THREE.PointLight(0x00ffff, 2, 100);
        s.pointLight.position.set(0, 0, 5);
        s.scene.add(s.pointLight);

        s.figureGroup = new THREE.Group();
        const figureMat = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            emissive: 0x002233,
            metalness: 0.8,
            roughness: 0.2
        });
        const figureGeo = new THREE.IcosahedronGeometry(1, 0);
        for (let i = 0; i < 50; i++) {
            const figure = new THREE.Mesh(figureGeo, figureMat);
            figure.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            );
            figure.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            figure.scale.setScalar(Math.random() * 0.3 + 0.1);
            s.figureGroup.add(figure);
        }
        s.scene.add(s.figureGroup);

        const dustCount = 10000;
        const dustGeo = new THREE.BufferGeometry();
        const dustPos = new Float32Array(dustCount * 3);
        for (let i = 0; i < dustCount; i++) {
            dustPos[i * 3 + 0] = (Math.random() - 0.5) * 40;
            dustPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            dustPos[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        const dustMat = new THREE.PointsMaterial({
            color: 0x00ffff,
            size: 0.02,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.3
        });
        s.dust = new THREE.Points(dustGeo, dustMat);
        s.scene.add(s.dust);

        const particleCount = 5000;
        const particleGeo = new THREE.BufferGeometry();
        const particlePos = new Float32Array(particleCount * 3);
        const particleData = [];

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const speed = Math.random() * 0.1 + 0.05;
            particleData.push({
                velocity: new THREE.Vector3(
                    Math.sin(phi) * Math.cos(theta) * speed,
                    Math.sin(phi) * Math.sin(theta) * speed,
                    Math.cos(phi) * speed
                ),
                life: 0,
                maxLife: Math.random() * 4 + 2
            });
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x88ffff,
            size: 0.05,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        s.particles = new THREE.Points(particleGeo, particleMat);
        s.particleData = particleData;
        s.scene.add(s.particles);

        const onResize = () => {
            if (!s.renderer || !s.renderer.domElement.parentElement) return;
            const { clientWidth, clientHeight } = s.renderer.domElement.parentElement;
            s.renderer.setSize(clientWidth, clientHeight);
            s.camera.aspect = clientWidth / clientHeight;
            s.camera.updateProjectionMatrix();
        };
        s.resizeObserver = new ResizeObserver(onResize);
        s.resizeObserver.observe(canvasRef.current.parentElement);
        onResize();

        apiRef.current = {
            updateScene: (progress) => {
                if (!s.scene || !s.renderer) return;

                s.figureGroup.rotation.y = progress * Math.PI * 2;
                s.figureGroup.rotation.x = progress * Math.PI * 0.5;
                const figScale = lerpVal(0.1, 1, Math.min(progress / 0.33, 1));
                s.figureGroup.scale.set(figScale, figScale, figScale);

                s.dust.rotation.y = progress * Math.PI * 0.2;
                const dustPosArray = s.dust.geometry.attributes.position.array;
                for (let i = 0; i < dustCount; i++) {
                    const y = dustPosArray[i * 3 + 1];
                    dustPosArray[i * 3 + 1] = y > 20 ? -20 : y + 0.01 * (progress * 5);
                }
                s.dust.geometry.attributes.position.needsUpdate = true;
                s.dust.material.opacity = lerpVal(0, 0.3, (progress - 0.2) / 0.33);

                const posAttr = s.particles.geometry.attributes.position;
                const sparkProgress = Math.max(0, (progress - 0.66) / 0.34);

                for (let i = 0; i < particleCount; i++) {
                    const pData = s.particleData[i];
                    pData.life = sparkProgress * pData.maxLife;

                    posAttr.array[i * 3 + 0] = pData.velocity.x * pData.life * 100;
                    posAttr.array[i * 3 + 1] = pData.velocity.y * pData.life * 100;
                    posAttr.array[i * 3 + 2] = pData.velocity.z * pData.life * 100;
                }
                posAttr.needsUpdate = true;
                s.particles.material.opacity = lerpVal(0, 0.8, sparkProgress);

                s.camera.position.x = Math.sin(progress * Math.PI * 1.5) * 5;
                s.camera.position.z = 10 + Math.cos(progress * Math.PI * 1.5) * 5;
                s.camera.lookAt(0, 0, 0);

                s.pointLight.color.setHSL(progress * 0.5 + 0.5, 1, 0.7);

                s.renderer.render(s.scene, s.camera);
            }
        };

        apiRef.current.updateScene(0);

        return () => {
            if (s.resizeObserver) s.resizeObserver.disconnect();
            if (s.renderer) s.renderer.dispose();
            s.scene?.traverse(obj => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) {
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach(mat => mat.dispose());
                    } else {
                        obj.material.dispose();
                    }
                }
            });
            Object.keys(s).forEach(key => s[key] = null);
        };
    }, [scriptsLoaded, apiRef]);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};
const ScrollableThreeGallery = ({ scriptsLoaded }) => {
    const pinContainerRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const threeSceneApiRef = useRef({ updateScene: () => { } });

    useEffect(() => {
        if (!scriptsLoaded || !pinContainerRef.current || !scrollTrackRef.current) return;

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinContainerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=3000",
            },
        });

        timeline.to(
            scrollTrackRef.current,
            {
                xPercent: -66.666,
                ease: "none",
            },
            0
        );

        timeline.eventCallback("onUpdate", () => {
            const progress = timeline.progress();
            if (threeSceneApiRef.current.updateScene) {
                threeSceneApiRef.current.updateScene(progress);
            }
        });

        return () => {
            timeline.kill();
            ScrollTrigger.killAll();
        };
    }, [scriptsLoaded]);

    return (
        <section id="gallery" className="relative z-10">
            <div ref={pinContainerRef} className="h-screen w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ContinuousThreeScene scriptsLoaded={scriptsLoaded} apiRef={threeSceneApiRef} />
                </div>

                <div ref={scrollTrackRef} className="h-full flex w-[300vw] relative z-10">
                    <div className="h-screen w-screen flex items-center justify-center p-12">
                        <div className="bg-black/50 backdrop-blur-2xl p-8 rounded-3xl max-w-lg text-center border border-white/10">
                            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Page 1</h3>
                            <p className="text-xl text-gray-300">The Way YOu Too Goo.</p>
                        </div>
                    </div>
                    <div className="h-screen w-screen flex items-center justify-center p-12">
                        <div className="bg-black/50 backdrop-blur-2xl p-8 rounded-3xl max-w-lg text-center border border-white/10">
                            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Page 2: Energize</h3>
                            <p className="text-xl text-gray-300">I Hope You Like It If Yes Follow Me.</p>
                        </div>
                    </div>
                    <div className="h-screen w-screen flex items-center justify-center p-12">
                        <div className="bg-black/50 backdrop-blur-2xl p-8 rounded-3xl max-w-lg text-center border border-white/10">
                            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Page #: Evolve</h3>
                            <p className="text-xl text-gray-300">Here We Go On The Way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MainApp = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        const scripts = [
            { name: 'THREE', src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js' },
            { name: 'POSTPROCESSING', src: 'https://unpkg.com/postprocessing@6.23.5/build/postprocessing.min.js' },
            { name: 'gsap', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js' },
            { name: 'ScrollTrigger', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js' }
        ];

        const checkAllLoaded = () => {
            const allLoaded = scripts.every(s => !!window[s.name]);
            if (allLoaded) {
                if (window.gsap && window.ScrollTrigger) {
                    try {
                        window.gsap.registerPlugin(window.ScrollTrigger);
                    } catch (e) {
                        console.error("Error registering ScrollTrigger:", e);
                    }
                }
                setScriptsLoaded(true);
            }
            return allLoaded;
        };

        if (checkAllLoaded()) return;

        const handleLoad = () => {
            checkAllLoaded();
        };
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = [
        { icon: IconUser, title: 'About', desc: 'Learn more about my journey, skills, and what drives my passion for development.', id: 'about', color: 'from-cyan-500 to-blue-500' },
        { icon: IconBriefcase, title: 'Projects', desc: 'Check out my work and case studies.', id: 'projects', color: 'from-red-500 to-yellow-500' },
        { icon: IconCamera, title: 'Gallery', desc: 'A horizontally scrolling image gallery.', id: 'gallery', color: 'from-purple-500 to-pink-500' },
        { icon: IconSparkles, title: 'Showcase', desc: 'Experience interactive animations and creative visual elements.', id: 'showcase', color: 'from-yellow-500 to-orange-500' },
        { icon: IconExternalLink, title: 'Links', desc: 'Connect with me on various platforms and explore my digital presence.', id: 'links', color: 'from-purple-500 to-pink-500' },
        { icon: IconMail, title: 'Contact', desc: 'Get in touch for collaborations, projects, or just to say hello.', id: 'contact', color: 'from-green-500 to-emerald-500' }
    ];

    const socialLinks = [
        { icon: IconLinkedin, title: 'LinkedIn', desc: 'Professional Network', url: 'https://www.linkedin.com/in/deekshith-1200b2384/', color: 'from-blue-600 to-blue-400' },
        { icon: IconYoutube, title: 'YouTube', desc: '@NotGamerMx', url: 'https://www.youtube.com/@NotGamerMx', color: 'from-red-600 to-red-400' },
        { icon: IconGithub, title: 'GitHub', desc: 'Code Portfolio', url: 'https://github.com/notgamermx', color: 'from-gray-800 to-gray-600' }
    ];

    const features = [
        { icon: IconZap, text: 'Fast Performance' },
        { icon: IconSparkles, text: 'Creative Design' },
        { icon: IconCamera, text: 'Responsive' },
        { icon: IconCode, text: 'Modern Tech' }
    ];

    return (
        <div className="bg-black text-white overflow-x-hidden relative">
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {scriptsLoaded && <Hyperspeed effectOptions={hyperspeedPresets.one} scriptsLoaded={scriptsLoaded} />}
            </div>

            <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0 pointer-events-none" />

            <div className="fixed inset-0 z-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-cyan-500/20"
                        style={{
                            width: Math.random() * 6 + 2 + 'px',
                            height: Math.random() * 6 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%',
                            animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                            animationDelay: Math.random() * 5 + 's',
                            boxShadow: '0 0 20px rgba(0,255,255,0.5)'
                        }}
                    />
                ))}
            </div>

            <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden z-10">
                <div className="text-center z-10 px-4">
                    <div className="mb-8 animate-fade-in">
                        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]">
                            NOT
                        </h1>
                        <div className="h-1 w-48 sm:w-64 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
                        </div>
                    </div>

                    <p className="text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 uppercase mb-12 animate-fade-in-delay drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                        Creative Developer & Designer
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 animate-fade-in-delay-2">
                        {['React', 'Three.js', 'WebGL', 'Shaders'].map((tech, i) => (
                            <span
                                key={tech}
                                className="px-3 sm:px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-cyan-500/40 text-xs sm:text-sm hover:border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300 cursor-default hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                    <IconArrowDown className="w-8 h-8 text-cyan-500/60" />
                </div>
            </section>

            <section id="nav" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                onClick={() => scrollToSection(item.id)}
                                className="group relative p-6 sm:p-8 rounded-3xl bg-black/50 backdrop-blur-2xl border border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                        <Icon className="w-12 sm:w-16 h-12 sm:h-16 text-cyan-400 group-hover:text-white drop-shadow-[0_0_15px_rgba(0,255,255,1)]" />
                                    </div>

                                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                        {item.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                            </div>
                        );
                    })}
                </div>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                            About Me
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                            I'm a passionate developer who loves creating beautiful and functional web experiences. With expertise in modern web technologies and a keen eye for design, I transform ideas into reality through clean code and creative solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group p-4 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 hover:border-cyan-500/60 transition-all duration-300 hover:translate-x-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
                                    >
                                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 mb-2 text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(0,255,255,1)]" />
                                        <span className="text-sm sm:text-base text-gray-300">{feature.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div id="showcase" className="flex gap-6 sm:gap-8 justify-center items-center h-64">
                        <p className="text-gray-500 text-lg">Visual showcase area</p>
                    </div>
                </div>
            </section>

            <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,100,100,0.6)]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                    {[
                        { title: 'Not Portfolio', repo: 'not_portfolio', desc: 'A high-performance, interactive developer portfolio built with React, Three.js, and GSAP.', color: 'from-cyan-500 to-blue-500' },
                        { title: 'Component Hub', repo: 'Component-Hub', desc: 'A collection of premium, reusable web components and UI elements ready for production.', color: 'from-purple-500 to-pink-500' },
                        { title: 'Eventio', repo: 'Eventio', desc: 'A full-stack event management platform for seamless organization and community discovery.', color: 'from-green-500 to-emerald-500' },
                        { title: 'Sports', repo: 'Sports', desc: 'A dynamic platform for sports enthusiasts, featuring real-time updates and interactive content.', color: 'from-yellow-500 to-orange-500' }
                    ].map((project, index) => (
                        <a
                            key={project.title}
                            href={`https://github.com/notgamermx/${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-8 rounded-3xl bg-black/50 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <IconCode className="w-12 h-12 text-white/80 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                    <IconExternalLink className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                                    {project.desc}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                    <span>View Repository</span>
                                    <div className="h-px flex-1 bg-white/10 group-hover:bg-white/20 transition-colors" />
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        </a>
                    ))}
                </div>
            </section>


            <ScrollableThreeGallery scriptsLoaded={scriptsLoaded} />

            <section id="links" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                    Connect With Me
                </h2>

                <div className="flex flex-wrap gap-6 sm:gap-8 justify-center max-w-5xl">
                    {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-80 p-6 sm:p-8 rounded-3xl bg-black/50 backdrop-blur-2xl border border-white/10 hover:border-cyan-500/60 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                                <div className="relative z-10 text-center">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 flex justify-center">
                                        <Icon className="w-12 sm:w-16 h-12 sm:h-16 text-cyan-400 group-hover:text-white drop-shadow-[0_0_20px_rgba(0,255,255,1)]" />
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                        {link.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-gray-400">{link.desc}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>

            <footer id="contact" className="py-16 sm:py-20 text-center border-t border-white/10 bg-black/50 backdrop-blur-2xl relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(100,255,100,0.6)]">
                    Contact Me
                </h2>

                <div className="max-w-xl mx-auto px-4">
                    <form className="space-y-6 bg-black/50 p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="github" className="block text-sm font-medium text-gray-300 mb-2 text-left">GitHub Account (Optional)</label>
                            <input
                                type="text"
                                id="github"
                                name="github"
                                className="w-full px-4 py-3 rounded-xl bg-gray-900/70 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                placeholder="your-github-username"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-xl text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transform hover:scale-105"
                            onClick={(e) => e.preventDefault()}
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-16">
                    <div className="flex justify-center space-x-6 mb-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-125"
                                title={link.title}
                            >
                                <link.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-500">© 2025 Deekshith. All rights reserved.</p>
                </div>
            </footer>

            <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-end gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl bg-black/80 backdrop-blur-2xl border border-cyan-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.9),0_0_30px_rgba(0,255,255,0.4)]">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.title}
                                onClick={() => scrollToSection(item.id)}
                                className="group relative p-2 sm:p-3 rounded-xl bg-white/5 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/70 hover:-translate-y-3 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.8)]"
                            >
                                <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400 group-hover:text-white" />
                                <span className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-black/90 backdrop-blur-sm border border-cyan-500/40 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_0_20px_rgba(0,255,255,0.6)]">
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
