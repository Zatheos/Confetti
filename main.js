const roundToDp = (val, places) => Math.round(val * (10 ** places)) / (10 ** places);

const polar2Cartesian = ({rad, angle}) => ({ x: rad * Math.sin(angle), y: rad * Math.cos(angle) });

const deg2Rad = (deg) => deg * (Math.PI / 180);

const cartesian2Polar = (x, y) => ({ distance: Math.sqrt(x * x + y * y), radians: Math.atan2(y, x)});

const rndColour = () => `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

const distBtwnPts = (a, b) =>  Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);

const sq2Circ = ({x, y}) => ({ x: x * Math.sqrt(1 - y * y / 2), y: y * Math.sqrt(1 - x * x / 2)});

const haveCollided = (a, b) => distBtwnPts(a.pos, b.pos) < a.rad + b.rad;

const rotate = (x, y, ang) => {
	//ang = deg2Rad(ang);
	const a = (x * Math.cos(ang)) - (y * Math.sin(ang));
	const b = (x * Math.sin(ang)) + (y * Math.cos(ang));
	return {x: a, y: b}
}

const mins2ms = mins => mins * 60 * 1000;

const ms2MinsSecs = ms => Math.floor(ms / (1000 * 60)) + ":" + (Math.floor(ms / 1000) % 60 < 10 ? "0" : "") + Math.floor(ms / 1000) % 60;

const mod = (n, m) =>  ((n % m) + m) % m;


const longConfetti = async () => {
	// do this for 30 seconds
	// const scalar = 4;
	const emoji = confetti.shapeFromText({ text: '😎', scalar: 10 });

	const d4 = confetti.shapeFromPath({ path: 'M235.11 196.24l17.074-29.463v29.463H235.11zM486.95 456H25.05L256 56zm-358.631-54.833l41.212-22.943-6.702-12.075-59.699 33.303 5.458 9.805a11.278 11.278 0 0 1 2.645-.881 11.822 11.822 0 0 1 5.566-.085 12.534 12.534 0 0 1 6.34 4.01 59.3 59.3 0 0 1 5.071 7.353l7.994-4.456zM273.074 196.24h-7.74v-42.734H250.24l-25.14 41.515v11.749h27.072v14.72h13.162v-14.72h7.74v-10.518zm131.619 212.45q6.822-11.93.616-21.735-3.26-5.132-10.675-9.745l-6.484 11.338a22.677 22.677 0 0 1 6.533 5.483q2.873 4.19-.17 9.515a8.453 8.453 0 0 1-5.916 4.552 10.868 10.868 0 0 1-7.463-1.497 14.08 14.08 0 0 1-6.436-8.513 99.728 99.728 0 0 1-2.294-15.167q-1.316-13.089-5.82-18.982a32.144 32.144 0 0 0-10.095-9.418l-23.28 40.705 10.275 5.88 14.828-25.913a15.203 15.203 0 0 1 1.679 4.577q.47 2.415 1.062 8.585l.64 6.57a45.149 45.149 0 0 0 2.717 12.823 21.518 21.518 0 0 0 9.455 10.638q8.598 4.915 17.002 2.33 8.404-2.584 13.814-12.014z' });
	const meeple = confetti.shapeFromPath({ path: 'M256 54.99c-27 0-46.418 14.287-57.633 32.23-10.03 16.047-14.203 34.66-15.017 50.962-30.608 15.135-64.515 30.394-91.815 45.994-14.32 8.183-26.805 16.414-36.203 25.26C45.934 218.28 39 228.24 39 239.99c0 5 2.44 9.075 5.19 12.065 2.754 2.99 6.054 5.312 9.812 7.48 7.515 4.336 16.99 7.95 27.412 11.076 15.483 4.646 32.823 8.1 47.9 9.577-14.996 25.84-34.953 49.574-52.447 72.315C56.65 378.785 39 403.99 39 431.99c0 4-.044 7.123.31 10.26.355 3.137 1.256 7.053 4.41 10.156 3.155 3.104 7.017 3.938 10.163 4.28 3.146.345 6.315.304 10.38.304h111.542c8.097 0 14.026.492 20.125-3.43 6.1-3.92 8.324-9.275 12.67-17.275l.088-.16.08-.166s9.723-19.77 21.324-39.388c5.8-9.808 12.097-19.576 17.574-26.498 2.74-3.46 5.304-6.204 7.15-7.754.564-.472.82-.56 1.184-.76.363.2.62.288 1.184.76 1.846 1.55 4.41 4.294 7.15 7.754 5.477 6.922 11.774 16.69 17.574 26.498 11.6 19.618 21.324 39.387 21.324 39.387l.08.165.088.16c4.346 8 6.55 13.323 12.61 17.254 6.058 3.93 11.974 3.45 19.957 3.45H448c4 0 7.12.043 10.244-.304 3.123-.347 6.998-1.21 10.12-4.332 3.12-3.122 3.984-6.997 4.33-10.12.348-3.122.306-6.244.306-10.244 0-28-17.65-53.205-37.867-79.488-17.493-22.74-37.45-46.474-52.447-72.315 15.077-1.478 32.417-4.93 47.9-9.576 10.422-3.125 19.897-6.74 27.412-11.075 3.758-2.168 7.058-4.49 9.81-7.48 2.753-2.99 5.192-7.065 5.192-12.065 0-11.75-6.934-21.71-16.332-30.554-9.398-8.846-21.883-17.077-36.203-25.26-27.3-15.6-61.207-30.86-91.815-45.994-.814-16.3-4.988-34.915-15.017-50.96C302.418 69.276 283 54.99 256 54.99z' });
	const d6 = confetti.shapeFromPath({ path: 'M255.76 44.764c-6.176 0-12.353 1.384-17.137 4.152L85.87 137.276c-9.57 5.536-9.57 14.29 0 19.826l152.753 88.36c9.57 5.536 24.703 5.536 34.272 0l152.753-88.36c9.57-5.535 9.57-14.29 0-19.825l-152.753-88.36c-4.785-2.77-10.96-4.153-17.135-4.153zm1.86 12.423a31.953 18.96 0 0 1 21.194 5.536 31.953 18.96 0 0 1-45.187 26.812 31.953 18.96 0 0 1 23.992-32.347zm-119.173 70.188a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.535 31.953 18.96 0 0 1-45.19 26.813 31.953 18.96 0 0 1 23.992-32.348zm118.24.244a31.953 18.96 0 0 1 22.125 32.362 31.953 18.96 0 1 1-45.187-26.812 31.953 18.96 0 0 1 23.06-5.55zm119.663.015a31.953 18.96 0 0 1 .002 0 31.953 18.96 0 0 1 21.195 5.535 31.953 18.96 0 0 1-45.19 26.812 31.953 18.96 0 0 1 23.993-32.347zM75.67 173.84c-5.753-.155-9.664 4.336-9.664 12.28v157.696c0 11.052 7.57 24.163 17.14 29.69l146.93 84.848c9.57 5.526 17.14 1.156 17.14-9.895V290.76c0-11.052-7.57-24.16-17.14-29.688l-146.93-84.847c-2.69-1.555-5.225-2.327-7.476-2.387zm360.773.002c-2.25.06-4.783.83-7.474 2.385l-146.935 84.847c-9.57 5.527-17.14 18.638-17.14 29.69v157.7c0 11.05 7.57 15.418 17.14 9.89L428.97 373.51c9.57-5.527 17.137-18.636 17.137-29.688v-157.7c0-7.942-3.91-12.432-9.664-12.278zM89.297 195.77a31.236 18.008 58.094 0 1 33.818 41.183 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm333.52 0A18.008 31.236 31.906 0 1 434 210.973a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.198 2.314a31.953 18.96 0 0 1 21.194 5.535 31.953 18.96 0 0 1-45.187 26.812 31.953 18.96 0 0 1 23.992-32.348zm109.198 30.018A18.008 31.236 31.906 0 1 378 243.305a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.52 32.332a31.236 18.008 58.094 0 1 33.817 41.183 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm109.52 0A18.008 31.236 31.906 0 1 322 275.637a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zM89.298 318.48a31.236 18.008 58.094 0 1 33.817 41.184 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.204zm333.52 0A18.008 31.236 31.906 0 1 434 333.684a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.184zm-56 32.332A18.008 31.236 31.906 0 1 378 366.017a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183zm-165.52 32.33a31.236 18.008 58.094 0 1 33.817 41.184 31.236 18.008 58.094 1 1-45-25.98 31.236 18.008 58.094 0 1 11.182-15.203zm109.52 0A18.008 31.236 31.906 0 1 322 398.347a18.008 31.236 31.906 0 1-45 25.98 18.008 31.236 31.906 0 1 33.818-41.183z' });
	const d10 = confetti.shapeFromPath({ path: 'M375.483 251.243l-109.98 51.138.213 183.381L477.01 266.346l-86.993-21.81zm-12.736 108.626l-5.947 14.699-48.604-8.955 5.007-12.832a141.306 141.306 0 0 0 13.51-11.358 167.184 167.184 0 0 0 16.566-17.517 170.478 170.478 0 0 0 12.606-17.958 115.607 115.607 0 0 0 9.514-17.97l14.068 2.51q-9.37 22.334-30.361 44.43-13.296 13.64-20.645 18.636zM121.603 244.334l-84.71 21.763L246.474 486V302.38l-109.946-51.137zm19.147 50.852a28.72 28.72 0 0 1 24.273 6.802 53.052 53.052 0 0 1 11.226 14.188l-13.081 2.676a28.542 28.542 0 0 0-5.388-7.374q-5.185-4.876-11.262-3.853l-.487.095a6.458 6.458 0 0 0-5.162 4.448c-.856 2.378-.238 5.554 1.796 9.371q4.08 7.6 10.81 9.027a23.785 23.785 0 0 0 8.563-.203l1.867-.344 5.791 10.822q-6.398 1.427-8.23 3.282-3.21 3.14.429 9.93a17.042 17.042 0 0 0 6.089 6.696 10.406 10.406 0 0 0 7.385 1.534l.416-.083q4.757-.964 5.079-4.757c.261-2.57-.655-5.744-2.748-9.514l12.38-2.545a49.247 49.247 0 0 1 4.103 11.226 19.956 19.956 0 0 1-.642 9.383 11.702 11.702 0 0 1-3.96 5.411 19.575 19.575 0 0 1-8.027 3.235l-1.19.214a27.971 27.971 0 0 1-17.494-2.7 32.193 32.193 0 0 1-14.128-14.092q-3.627-6.79-2.604-12.19a8.396 8.396 0 0 1 2.521-4.947h-.071q-1.844.31-7.04-2.497a32.11 32.11 0 0 1-12.916-13.593q-5.245-9.764-3.282-18.398 1.962-8.634 13.676-11zM27.19 248.865l108.78-116.309a7.135 7.135 0 0 1 1.427 0h.154q3.14.345 2.842 3.71a19.36 19.36 0 0 1-3.294 8.1 39.376 39.376 0 0 1-9.728 10.405q-3.912 2.938-15.044 9.514-12.796 7.505-19.55 14.77a92.535 92.535 0 0 0-11.513 14.486l32.907 3.758 8.182-12.963-20.967-2.378a36.415 36.415 0 0 1 4.757-3.83q2.379-1.605 8.444-5.125l6.422-3.747a92.975 92.975 0 0 0 12.903-8.776 61.472 61.472 0 0 0 12.51-14.414q6.84-10.846 6.494-17.957c-.19-3.949-2.105-6.434-5.684-7.505l79.798-85.161-102.097 179.576-5.708 10.06zm367.238-71.974q-3.817-5.458-3.758-8.515c0-2.033 1.19-3.199 3.568-3.448h.57a11.892 11.892 0 0 1 6.91 2.247 29.85 29.85 0 0 1 7.837 8.051q3.687 5.28 3.71 8.397c0 2.093-1.188 3.258-3.496 3.567h-.594a11.75 11.75 0 0 1-6.957-2.378 29.79 29.79 0 0 1-7.79-7.885zm-109.41-141.52l83.948 89.634h-1.189c-.38 0-.975 0-1.463.107q-7.825.892-8.324 6.862-.5 5.97 5.03 13.747a53.778 53.778 0 0 0 6.375 7.374 37.901 37.901 0 0 0 10.144 6.897q-2.117 2.89-.702 7.98a37.283 37.283 0 0 0 5.613 11.096 55.122 55.122 0 0 0 15.223 14.806q8.098 5.268 16.066 4.935.81 0 1.618-.13 8.776-.988 9.228-7.873a16.114 16.114 0 0 0-.463-4.853l58.689 62.686-91.572-22.941-6.1-10.703zm98.22 104.927l2.45 2.617c.451.57.903 1.189 1.355 1.784 1.808 2.592 2.723 4.757 2.723 6.529 0 1.771-1.034 2.782-3.127 3.02h-.512a10.346 10.346 0 0 1-6.077-1.95 22.596 22.596 0 0 1-6.184-6.137c-1.974-2.83-2.937-5.102-2.878-6.814.06-1.713 1.118-2.7 3.187-2.937h.524a10.263 10.263 0 0 1 6.005 1.879 19.147 19.147 0 0 1 2.533 2.01zM255.987 26L137.456 231.026l118.532 55.05 118.604-55.05zm-1.19 208.463q-17.529 0-24.58-12.273-7.053-12.273-7.053-34.988 0-22.714 7.052-35.047 7.052-12.332 24.582-12.344 17.53 0 24.582 12.332 7.052 12.333 7.052 35.047 0 22.715-7.052 34.988-7.053 12.273-24.582 12.285zm10.538-71.807q2.497 7.968 2.497 24.546 0 15.817-2.497 24.201-2.498 8.384-10.537 8.325-8.04 0-10.632-8.325-2.593-8.324-2.593-24.2 0-16.579 2.593-24.547t10.632-7.968q8.015-.012 10.513 7.956z' });
	const d12 = confetti.shapeFromPath({ path: 'M450.169 181.354L379.685 84.29 265.629 47.325v92.652l96.384 70.031zm-91.46-28.416a19.735 19.735 0 0 1-3.004 6.606 16.563 16.563 0 0 1-11.924 6.857q-7.548.918-15.729-5.056-8.18-5.974-9.599-13.439a16.563 16.563 0 0 1 2.922-13.414 19.747 19.747 0 0 1 5.378-4.866q3.422-2.206 9.026-1.574a18.757 18.757 0 0 1-1.717-10.421 21.082 21.082 0 0 1 4.03-9.802 19.246 19.246 0 0 1 13.666-7.99q8.633-1.108 17.779 5.57 9.146 6.677 10.326 14.952a20.033 20.033 0 0 1-3.827 15.204 20.772 20.772 0 0 1-8.145 6.797 16.312 16.312 0 0 1-10.17 1.192q2.038 5.461.989 9.384zm-10.731-8.287a8.252 8.252 0 0 1-1.717 6.189 8.907 8.907 0 0 1-15.669-3.685 8.562 8.562 0 0 1 1.908-6.367 8.347 8.347 0 0 1 5.33-3.578 8.252 8.252 0 0 1 6.451 1.825 8.347 8.347 0 0 1 3.757 5.628zm9.54-11.77a10.732 10.732 0 0 1-11.472-8.346q-.548-3.709 2.504-7.894a10.851 10.851 0 0 1 6.654-4.77 10.732 10.732 0 0 1 11.543 8.43 10.851 10.851 0 0 1-2.469 7.775q-2.945 4.198-6.653 4.806zm-110.968 7.096V47.325L132.494 84.29 62.01 181.354l88.156 28.618zm-112.66-21.798l37.895-26.52a31.73 31.73 0 0 1 5.056 12.664q1.55 7.155-2.79 19.413a98.304 98.304 0 0 0-4.341 14.524 13.904 13.904 0 0 0 2.158 10.314 10.732 10.732 0 0 0 6.034 4.472 8.347 8.347 0 0 0 7.154-1.574q4.961-3.47 4.162-8.43a22.418 22.418 0 0 0-3.577-7.644l10.577-7.393q4.674 7.25 5.425 13.2 1.443 11.328-9.682 19.079-8.789 6.153-17.386 4.913-8.597-1.24-14.214-9.242a21.237 21.237 0 0 1-3.97-13.486 44.513 44.513 0 0 1 3.112-12.568l2.194-6.141q2.063-5.76 2.659-8.12a15.025 15.025 0 0 0 .43-4.77l-24.16 16.908zm64.7 215.412h114.998l35.51-109.37-93.009-67.598-93.009 67.599zm89.266-95.072a8.347 8.347 0 0 0-6.797-2.838q-6.058 0-8.24 4.52a22.382 22.382 0 0 0-1.49 8.346h-12.855q.322-8.62 3.124-13.927 5.319-10.112 18.889-10.112 10.731 0 17.063 5.962 6.332 5.962 6.237 15.633a21.25 21.25 0 0 1-4.484 13.32 44.585 44.585 0 0 1-9.659 8.62l-5.318 3.769q-4.996 3.577-6.832 5.127a15 15 0 0 0-3.1 3.685h29.488v11.685h-46.207a31.73 31.73 0 0 1 3.125-13.271q2.838-6.75 13.414-14.31a98.602 98.602 0 0 0 11.925-9.408 13.916 13.916 0 0 0 4.15-9.682 10.732 10.732 0 0 0-2.433-7.13zm-79.607-1.812a58.536 58.536 0 0 0 8.776-.835 12.377 12.377 0 0 0 6.511-3.577 11.686 11.686 0 0 0 2.6-4.842 11.125 11.125 0 0 0 .512-2.707h11.09v67.54h-13.606v-46.553H208.25v-9.038zM196.468 352.67l-54.434 75.04 114.055 36.965 114.056-36.965-54.434-75.04H196.468zm77.27 83.792q-5.64 7.226-17.517 7.214-12.76 0-18.817-10.672-4.71-8.347-4.71-21.464a97.78 97.78 0 0 1 .656-12.58 38.444 38.444 0 0 1 4.52-14.309 23.121 23.121 0 0 1 7.571-7.87 20.414 20.414 0 0 1 11.197-2.981q9.408 0 15 4.77a18.328 18.328 0 0 1 6.285 12.83h-13.165a6.773 6.773 0 0 0-1.252-3.577 7.286 7.286 0 0 0-6.475-3.172q-6.474 0-9.217 7.262a45.062 45.062 0 0 0-2.051 11.829 14.905 14.905 0 0 1 5.724-4.281 20.975 20.975 0 0 1 22.19 4.77 21.833 21.833 0 0 1 5.748 15.609 26.34 26.34 0 0 1-5.64 16.61zm-10.732-24.612q2.885 3.148 2.885 9.063a13.868 13.868 0 0 1-2.54 8.645 8.275 8.275 0 0 1-6.963 3.327 9.36 9.36 0 0 1-7.453-3.446 13.248 13.248 0 0 1-2.862-8.884q0-6.75 3.911-9.778a9.456 9.456 0 0 1 5.962-2.05 9.241 9.241 0 0 1 7.131 3.111zm119.147-112.195l27.879 8.347-4.77 16.157zm-14.31-71.546l-36.81 113.28 54.483 74.993L456 319.366V199.503zm66.073 86.952l-13.927-4.162-7.656 25.614-11.113-3.315-32.196-35.523 4.27-14.309 40.434 12.08 2.183-7.322 9.956 2.97-2.182 7.32 13.928 4.162zm-289.76-86.952L56 199.491v119.934l70.484 97.016 54.482-74.992zM72.54 286.24l44.43-14-4.77-15.143 8.621-2.719a58.536 58.536 0 0 0 3.435 8.12 12.377 12.377 0 0 0 5.33 5.14 11.686 11.686 0 0 0 5.401 1.026 11.137 11.137 0 0 0 2.731-.322l3.327 10.576-64.391 20.272zm18.47 58.596l-4.09-12.974 44.43-13.999-4.77-15.144 8.622-2.718a58.68 58.68 0 0 0 3.434 8.12 12.365 12.365 0 0 0 5.33 5.14 11.65 11.65 0 0 0 5.402 1.025 11.102 11.102 0 0 0 2.73-.322l3.328 10.577z' });
	const d20 = confetti.shapeFromPath({ path: 'M248 20.3L72.33 132.6 248 128.8zm16 0v108.5l175.7 3.8zm51.4 58.9c6.1 3.5 8.2 7.2 15.1 4.2 10.7.8 22.3 5.8 27.6 15.7 4.7 4.5 1.5 12.6-5.2 12.6-9.7.1-19.7-6.1-14.6-8.3 4.7-2 14.7.9 10-5.5-3.6-4.5-11-7.8-16.3-5.9-1.6 6.8-9.4 4-12-.7-2.3-5.8-9.1-8.2-15-7.9-6.1 2.7 1.6 8.8 5.3 9.9 7.9 2.2.2 7.5-4.1 5.1-4.2-2.4-15-9.6-13.5-18.3 5.8-7.39 15.8-4.62 22.7-.9zm-108.5-3.5c5.5.5 12.3 3 10.2 9.9-4.3 7-9.8 13.1-18.1 14.8-6.5 3.4-14.9 4.4-21.6 1.9-3.7-2.3-13.5-9.3-14.9-3.4-2.1 14.8.7 13.1-11.1 17.8V92.3c9.9-3.9 21.1-4.5 30.3 1.3 8 4.2 19.4 1.5 24.2-5.7 1.4-6.5-8.1-4.6-12.2-3.4-2.7-8.2 7.9-7.5 13.2-8.8zm35 69.2L55.39 149l71.21 192.9zm28.2 0l115.3 197L456.6 149zm-14.1 7.5L138.9 352.6h234.2zm133.3 21.1c13.9 8.3 21.5 26.2 22.1 43-1.3 13.6-.7 19.8-15.2 21.4-14.5 1.6-23.9-19.2-29.7-32.6-3.4-9.9-5.8-24 1.7-31.3 6.1-4.8 15-4.1 21.1-.5zm-223.7 16.1c2.1 4-.5 11.4-4.8 12.1-4.9.7-3.8-9.3-9.4-11.6-6.9-2.3-13.6 5.6-15 11.6 10.4-4 20.3 7.1 20.3 17-.4 11.7-7.9 24.8-19.7 28.1h-5.6c-12.7-.7-18.3-15.8-14.2-26.6 4.4-15.8 10.8-33.9 27.2-40.6 8.5-3.9 19 3.2 21.2 10zm213.9-8.4c-7.1-.1-4.4 10-3.3 14.5 3.5 11.5 7.3 26.6 18.9 30 6.8-1.2 4.4-12.8 3.7-16.5-4.7-10.9-7.1-23.3-19.3-28zM52 186v173.2l61.9-5.7zm408 0l-61.9 167.5 61.9 5.7zm-117.9.7l28.5 63.5-10 4.4-20-43.3c-6.1 3-13 8.9-14.6-1.4-1.3-3.9 8.5-5.1 8.1-11.9-.3-6.9 2.2-12.2 8-11.3zm-212 27.4c-2.4 5.1-4.1 10.3-2.7 15.9 1.7 8.8 13.5 6.4 15.6-.8 2.7-5 3.9-11.7-.5-15.7-4.1-3.4-8.9-2.8-12.4.6zm328.4 41.6c-.1 18.6 1.1 39.2-9.7 55.3-.9 1.2-2.2 1.9-3.7 2.5-5.8-4.1-3-11.3 1.2-15.5 1 7.3 5.5-2.9 6.6-5.6 1.3-3.2 3.6-17.7-1-10.2.7 4-6.8 13.1-9.3 8.1-5-14.4 0-30.5 7-43.5 5.7-6.2 9.9 4.4 8.9 8.9zM59.93 245.5c.59.1 1.34 1 2.48 3.6v61.1c-7.3-7-4.47-18-4.45-26.4 0-8.4 1.65-16.3-1.28-23.2-4.62-1.7-5.79-17-3.17-12.7 4.41 4.8 4.66-2.7 6.42-2.4zm178.77 7.6c8.1 4.5 13.8 14.4 10.8 23.6-2.1 15.2-27 21.1-30.4 29.7-1.2 3 25.4 1.6 30.2 1.6.5 4 1.5 10.7-3.8 11.7-14.5-1.2-29.9-.6-45.1-.6.4-11.2 7.4-21.3 17-26.8 6.9-4.9 15.4-9.3 18.1-17.9 1.8-4.5-.6-9.3-4.6-11.5-4.2-2.9-11-2.3-13.2 2.7-2 3.8-4.4 9.1-8.7 9.6-2.9.4-9 .5-7.2-4.9 1.4-5.6 3.4-11.5 8.2-15.2 8.8-6.3 19.9-6.7 28.7-2zm53.3-1.4c6.8 2.2 12 7.9 14.3 14.6 6.1 14.7 5.5 33.1-4.4 45.9-4.5 4.8-10.2 9.1-17 9.1-12.5-.1-22.4-11.1-24.8-22.8-3.1-13.4-1.8-28.7 6.9-39.8 6.8-7.6 16-10.3 25-7zm156.1 8.1c-1.6 5.9-3.3 13.4-.7 19.3 5.1-2 5.4-9.6 6.6-14.5.9-6.1-3.5-12.6-5.9-4.8zm-176.2 21.1c.6 10.5 1.7 22.8 9.7 28.2 4.9 1.8 9.7-2.2 11.1-6.7 1.9-6.3 2.3-12.9 2.4-19.4-.2-7.1-1.5-15-6.7-20.1-12.2-4.4-15.3 10.9-16.5 18zM434 266.8V328l-4.4 6.7v-42.3c-4.6 7.5-9.1 9.1-6.1-.9 6.1-7.1 4.8-17.4 10.5-24.7zM83.85 279c.8 3.6 5.12 17.8 2.04 14.8-1.97-1.3-3.62-4.9-3.41-6.1-1.55-3-2.96-6.1-4.21-9.2-2.95 4-3.96 8.3-3.14 13.4.2-1.6 1.18-2.3 3.39-.7 7.84 12.6 12.17 29.1 7.29 43.5l-2.22 1.1c-10.36-5.8-11.4-19.4-13.43-30-1.55-12.3-.79-24.7 2.3-36.7 5.2-3.8 9.16 5.4 11.39 9.9zm-7.05 20.2c-4.06 4.7-2.26 12.8-.38 18.4 1.11 5.5 6.92 10.2 6.06 1.6.69-11.1-2.33-12.7-5.68-20zm66.4 69.4L256 491.7l112.8-123.1zm-21.4.3l-53.84 4.9 64.24 41.1c-2.6-2.7-4.9-5.7-7.1-8.8-5.2-6.9-10.5-13.6-18.9-16.6-8.75-6.5-4.2-5.3 2.9-2.6-1-1.8-.7-2.6.1-2.6 2.2-.2 8.4 4.2 9.8 6.3l24.7 31.6 65.1 41.7zm268.4 0l-42.4 46.3c6.4-3.1 11.3-8.5 17-12.4 2.4-1.4 3.7-1.9 4.3-1.9 2.1 0-5.4 7.1-7.7 10.3-9.4 9.8-16 23-28.6 29.1l18.9-24.5c-2.3 1.3-6 3.2-8.2 4.1l-40.3 44 74.5-47.6c5.4-6.7 1.9-5.6-5.7-.9l-11.4 6c11.4-13.7 30.8-28.3 40-35.6 9.2-7.3 15.9-9.8 8.2-1.5l-12.6 16c10-7.6.9 3.9-4.5 5.5-.7 1-1.4 2-2.2 2.9l54.5-34.9zM236 385.8v43.4h-13.4v-30c-5-1.4-10.4 1.7-15.3-.3-3.8-2.9 1-6.8 4.5-5.9 3.3-.1 7.6.2 9.3-3.2 4.4-4.5 9.6-4.4 14.9-4zm29 .5c12.1 1.2 24.2.6 36.6.6 1.5 3 .8 7.8-3.3 7.9-7.7.3-21-1.6-25.9.6-8.2 10.5 5.7 3.8 11.4 5.2 7 1.1 15 2.9 19.1 9.2 2.1 3.1 2.7 7.3.7 10.7-5.8 6.8-17 11.5-25.3 10.9-7.3-.6-15.6-1.1-20.6-7.1-6.4-10.6 10.5-6.7 12.2-3.2 6 5.3 20.3 1.9 20.7-4.7.6-4.2-2.1-6.3-6.9-7.8-4.8-1.5-12.6 1-17.3 1.8-4.7.8-9.6.5-9-4.4.8-4.2 2.7-8.1 2.7-12.5.1-3 1.7-7 4.9-7.2zm133.5 5c-.2-.2-7 5.8-9.9 8.1l-15.8 13.1c10.6-6.5 19.3-12 25.7-21.2zm-247 14.2c2.4 0 7.5 4.6 9.4 7l26.1 31.1c-7.7-2.1-13.3-7.1-17.6-13.7-6.5-7.3-11.3-16.6-21.2-19.6-9-5-5.2-6.4 2.1-2.2-.3-1.9.2-2.6 1.2-2.6z' });
	const joker = confetti.shapeFromPath({ path: 'M119.436 36c-16.126 0-29.2 17.237-29.2 38.5v363c0 21.263 13.074 38.5 29.2 38.5h275.298c16.126 0 29.198-17.237 29.198-38.5v-363c0-21.263-13.072-38.5-29.198-38.5zm26.369 10.951l11.002 32.856 34.648.312-27.848 20.617 10.41 33.05-28.212-20.114-28.215 20.113L128 100.736 100.152 80.12l34.649-.312zM363.979 161.84c7.127 9.459 12.739 20.689 16.832 32.04 3.8 10.544 6.197 21.211 6.668 31.02-.163 19.015-3.915 23.274-14.557 36.934l-6.703-11.48c-10.85-13.106-30.779-48.4-47.383-43.672-6.521 6.11-8.996 13.37-10.313 20.802 2.898 8.8 4.477 18.43 4.477 28.516 0 15.293-3.615 29.54-9.996 41.416 22.643 4.537 57.927 19.332 57.973 39.223-.27 3.783-1.835 7.68-4.362 10.42-10.743 12.528-36.958 4.125-45.2 10.072.796 6.947 4.112 14.118 4.355 20.174.136 4.36-1.768 10.58-6.508 13.996-5.67 4.087-12.968 4.551-18.52 3.045C279.94 392.226 272 379.649 256 377c-13.544 3.491-22.412 13.87-34.742 17.346-5.552 1.506-12.85 1.042-18.52-3.045-4.74-3.417-6.644-9.636-6.508-13.996-.058-7.142 4.107-13.794 4.356-20.174-15.741-7.788-33.816 1.97-45.201-10.072-2.527-2.74-4.093-6.637-4.362-10.42 6.146-27.341 35.374-34.684 57.973-39.223C202.615 285.54 199 271.293 199 256c0-11.489 2.047-22.385 5.764-32.135-2.357-7.923-3.441-15.988-9.438-22.441-8.758-.925-14.079 6.897-17.842 12.63-11.683 19.5-18.718 30.606-32.88 46.192-16.604-23.4-19.314-49.29-13.157-70.988 6.065-20.331 19.17-38.798 37.926-47.924 21.216-9.766 39.872-10.03 58.885.203 5.163-13.053 10.4-25.65 18.035-36.209 9.625-13.31 23.8-25.631 43.707-25.295 38.8.656 73.993 51.156 73.979 81.807zm-72.22-63.893c-35.759 2.409-44.771 44.746-55.189 71.29l-9.447-7.087c-18.428-12.31-31.076-13.732-49.875-4.63-12.924 6.288-23.701 20.62-28.553 36.882-3.38 11.329-3.765 23.225-.949 33.645 9.45-13.549 15.806-30.08 28.317-39.178 7.486-7.975 26.27-8.498 35.45 3.897 4.838 7.02 7.437 14.54 9.5 22.234h72.165c.592-1.944 1.067-3.762 2.017-6.033 2.956-7.064 7.765-16.266 18.395-19.504 18.09-3.862 32.494 7.106 43.498 18.514 4.517 4.717 8.492 9.696 12.098 14.517-.69-6.798-2.477-14.651-5.31-22.508-13.127-36.707-37.889-51.031-70.386-32.011 2.556-16.423 16.87-35.72 46.25-26.962-9.094-17.135-30.355-42.471-47.98-43.066zM220.644 233c-2.31 6.965-3.643 14.753-3.643 23 0 15.85 4.892 30.032 12.26 39.855C236.628 305.68 245.988 311 256 311c10.012 0 19.372-5.32 26.74-15.145C290.108 286.032 295 271.85 295 256c0-8.247-1.334-16.035-3.643-23zM232 280h48s-8 14-24 14-24-14-24-14zm-11.14 33.566c-13.86 3.34-50.369 8.9-51.842 21.42 9.621 1.947 20.446.838 28.998 2.235 5.993 1.018 12.82 3.323 17.285 9.517 3.375 4.683 3.577 10.103 3.037 14.21-.543 5.89-3.317 10.557-3.975 16.32 15.955-2.59 28.264-17.532 41.637-18.268 16-.702 29.313 17.402 41.637 18.268-.893-5.59-3.262-11.158-3.975-16.32-.54-4.107-.338-9.527 3.037-14.21 4.465-6.194 11.292-8.5 17.285-9.517 9.742-2.229 19.975.396 28.998-2.235-5.77-13.125-39.813-19.454-51.841-21.42C281.665 323.01 269.45 329 256 329c-13.452 0-25.665-5.991-35.14-15.434zm117.122 64.649l28.213 20.113 28.215-20.113L384 411.264l27.848 20.617-34.649.312-11.004 32.856-11.002-32.856-34.648-.312 27.848-20.617z' });
	const queen = confetti.shapeFromPath({ path: 'M477.518 181.966a25 25 0 0 1-34.91 23l-62.29 150.26h-248.92l-62.24-150.19a25 25 0 1 1 9.73-7.29l87 71.2 20.92-126.4a25 25 0 1 1 14.7-1.85l54.31 117 54.42-117.3a25 25 0 1 1 14.58 2.08l20.93 126.42 87.26-71.3a25 25 0 1 1 44.51-15.63zm-71.66 241.25h-300v60h300v-60zm-27.75-52h-244.22v36h244.22v-36z' });
	const kingMeeple = confetti.shapeFromPath({ path: 'M256 28.727l-30.854 30.855-36.058-24.041L199.378 87h113.243l10.291-51.459-36.058 24.041L256 28.727zM189.822 105c-3.877 10.797-5.815 21.922-6.41 32.184 47.396 17.569 95.091 19.4 145.18.064-.591-10.279-2.529-21.428-6.414-32.248H189.822zm154.98 41.05L289.669 311.46l-16-31.998-17.668 53-17.668-53-16 31.998-54.871-164.613-.264-.791c-26.01 12.556-53.086 25.22-75.662 38.12-14.32 8.184-26.805 16.415-36.203 25.26C45.934 218.28 39 228.24 39 239.99c0 5 2.44 9.075 5.19 12.065 2.753 2.99 6.054 5.312 9.812 7.48 7.515 4.336 16.99 7.95 27.412 11.076 15.483 4.646 32.823 8.1 47.9 9.577-14.996 25.84-34.953 49.575-52.447 72.316C56.65 378.786 39 403.99 39 431.99c0 4-.043 7.123.31 10.26.356 3.137 1.257 7.053 4.41 10.156 3.156 3.104 7.017 3.938 10.163 4.28 3.146.345 6.316.304 10.38.304h111.542c8.097 0 14.026.493 20.125-3.43 6.1-3.92 8.324-9.275 12.67-17.275l.088-.16.08-.166s9.723-19.77 21.324-39.389c5.8-9.808 12.097-19.576 17.574-26.498 2.74-3.46 5.304-6.204 7.15-7.754.564-.472.82-.56 1.184-.76.363.2.62.288 1.184.76 1.846 1.55 4.41 4.294 7.15 7.754 5.477 6.922 11.774 16.69 17.574 26.498 11.6 19.618 21.324 39.389 21.324 39.389l.08.164.088.16c4.346 8 6.55 13.323 12.61 17.254 6.058 3.93 11.974 3.45 19.957 3.45H448c4 0 7.12.044 10.244-.303 3.123-.347 6.997-1.21 10.12-4.332 3.12-3.122 3.983-6.999 4.33-10.122.347-3.122.306-6.244.306-10.244 0-28-17.65-53.203-37.867-79.486-17.493-22.74-37.45-46.475-52.447-72.316 15.077-1.478 32.417-4.93 47.9-9.577 10.422-3.125 19.897-6.739 27.412-11.074 3.758-2.168 7.059-4.49 9.81-7.48 2.754-2.99 5.192-7.065 5.192-12.065 0-11.75-6.934-21.71-16.332-30.554-9.398-8.846-21.883-17.077-36.203-25.26-22.576-12.9-49.652-25.567-75.662-38.123zM190.3 158.433l35.369 106.107 16-31.998L256 275.537l14.332-42.996 16 31.998 35.277-105.828c-44.795 14.197-88.786 12.909-131.31-.28z' });
	const meepleCirc = confetti.shapeFromPath({ path: 'M256 16c-7.5 0-12.8 3.96-16 8.88-2.7 4.42-3.8 9.56-4.1 14.12-8.4 4.2-17.8 8.41-25.3 12.71-5.9 3.61-14.4 8.59-14.6 15.49.6 5.31 7.8 7.24 11.7 8.47 4.3 1.26 9.1 2.19 13.3 2.6-4.2 7.16-9.7 13.71-14.6 19.98-5.5 7.25-10.4 14.25-10.4 21.95.1 3.3.5 6.6 4.2 6.8 10.8.3 22.4.1 33.6.1 4.9.5 7.3-1.7 9.3-5.7 2.7-5.8 6.9-14.2 12.9-20.6 5.8 6.4 9.6 13 13.1 20.5v.1c2 4.5 4.8 5.7 9.1 5.7l33.7-.1c3.6-.3 4.1-3.6 4.1-6.8 0-7.7-4.8-14.7-10.4-21.95-4.8-6.27-10.4-12.82-14.5-19.98 4.1-.41 8.9-1.34 13.2-2.6 4-1.56 11.6-3.5 11.7-8.47-1-7.92-8.9-12.21-14.5-15.49-7.6-4.3-16.9-8.51-25.4-12.71-.2-4.56-1.4-9.7-4.1-14.12-3.2-4.92-8.5-8.88-16-8.88zm138.4 92.1c-1.7 0-3.4.3-4.9 1.1-4.3 3.2-2.4 10.4-1.5 14.4 1.1 4.3 2.7 8.9 4.4 12.8-8.3-.1-16.7-1.6-24.6-2.7-9-1.1-17.5-1.9-24.2 2-2.8 1.7-5.4 3.7-3.8 7 5.2 9.5 11.2 19.5 16.8 29.2 2 4.5 5.1 5.4 9.5 5.2 6.4-.6 15.8-1.1 24.3.8-2.6 8.3-6.4 14.9-11.2 21.6l-.1.1c-2.8 4-2.5 7-.3 10.7l16.9 29.2c2.1 2.9 5.2 1.7 7.9.1 6.7-3.8 10.4-11.5 13.8-20 3.1-7.3 5.9-15.4 10.1-22.5 2.4 3.3 5.6 7 8.8 10.1 3.4 2.7 8.9 8.3 13.2 5.9 6.4-4.8 6.1-13.8 6.2-20.3-.1-8.7-1.1-18.9-1.7-28.3 3.8-2.5 7.7-6.1 10.2-10.6 2.6-5.3 3.4-11.8-.3-18.3-3.8-6.5-9.9-9.1-15.7-9.5-5.2-.1-10.2 1.5-14.3 3.6-7.9-5.2-16.2-11.3-23.7-15.6-4.6-2.5-10.5-5.9-15.8-6zm-277 .7c-5.5.2-10.8 3.5-15.1 5.9-7.57 4.4-15.82 10.4-23.78 15.6-4.07-2.1-9.01-3.6-14.22-3.5-5.89.4-11.95 2.9-15.79 9.5-3.74 6.3-2.93 12.9-.4 18.1 2.48 4.7 6.4 8.1 10.33 10.7-.63 9.3-1.8 19.7-1.75 28.2.16 7 .17 16.8 6.16 20.4 4.92 2.2 10.21-3.1 13.22-5.9 3.17-3.1 6.36-6.8 8.89-10.2 4.06 7.3 6.96 15.3 9.96 22.7 3.54 8.3 7.08 16.1 13.78 19.9 2.8 1.7 5.9 2.8 8.1-.1 5.6-9.4 11.4-19.6 17-29.3 2.8-3.9 2-7.1-.4-10.8-3.8-5.2-8.8-13.1-11.4-21.4 8.5-1.9 16.1-1.9 24.3-1.1h.1c5 .4 7.3-1.3 9.4-5.1l16.9-29.2c1.4-3.2-1.2-5.3-3.8-6.8-6.8-4-15.3-3.3-24.3-2-7.8 1-16.3 2.6-24.6 2.5 1.8-3.7 3.4-8.3 4.4-12.6.7-4.3 2.7-11.9-1.4-14.4-1.9-.8-3.8-1.1-5.6-1.1zm281.8 160.9c-1.2 0-2.3.5-3.2 1.8-5.6 9.3-11.3 19.5-16.9 29.2-2.9 3.9-2.1 7.1.3 10.8 3.7 5.2 8.8 13.1 11.4 21.4-8.4 1.9-16.1 1.9-24.3 1.1h-.1c-4.9-.4-7.3 1.3-9.4 5.1l-16.8 29.2c-1.5 3.3 1.1 5.4 3.8 6.9 6.7 3.9 15.2 3.3 24.2 2 7.9-1 16.3-2.6 24.6-2.5-1.7 3.7-3.3 8.3-4.4 12.6-.6 4.3-2.7 11.9 1.5 14.4 7.4 3.2 15-1.6 20.7-4.8 7.5-4.4 15.8-10.4 23.7-15.6 4 2.1 9.1 3.6 14.2 3.5 5.9-.4 12-2.9 15.7-9.4 3.8-6.5 3-13.1.4-18.3-2.5-4.6-6.4-8.1-10.3-10.6.6-9.4 1.7-19.7 1.7-28.3-.2-7-.2-16.8-6.1-20.4-4.9-2.1-10.2 3.1-13.2 5.9-3.2 3.1-6.4 6.8-8.9 10.2-4.1-7.2-7-15.2-10-22.6-3.5-8.4-7.1-16.1-13.8-20-1.6-.9-3.3-1.7-4.8-1.6zm-285.3.7c-1.5 0-3.2.8-4.7 1.6-6.8 3.9-10.41 11.6-13.85 20-3.05 7.3-5.88 15.4-10.07 22.6-2.4-3.4-5.57-7.1-8.71-10.1-3.44-2.8-8.97-8.3-13.27-6-6.42 4.9-6.11 13.8-6.17 20.3.1 8.8 1.09 18.9 1.62 28.4-3.8 2.5-7.62 6-10.08 10.6-2.59 5.3-3.46 11.8.29 18.3 3.62 6.4 9.73 9 15.49 9.4 5.3.2 10.21-1.5 14.43-3.6 7.75 5.2 16.14 11.4 23.52 15.6 6.2 3.4 14.7 8.3 20.8 4.9 4.3-3.2 2.4-10.4 1.5-14.4-1.1-4.3-2.7-8.9-4.4-12.8 8.3.1 16.7 1.6 24.6 2.7 9 1.1 17.5 1.9 24.2-2 2.8-1.6 5.3-3.7 3.9-7-5.3-9.5-11.3-19.6-16.9-29.3-1.9-4.4-5.1-5.3-9.5-5.1-6.4.7-15.7 1.1-24.2-.8 2.5-8.3 6.4-14.9 11.2-21.6v-.1c2.8-4.1 2.5-6.9.3-10.7L117 272.1c-.9-1.2-2-1.7-3.1-1.7zm163.2 114.1c-3.7.1-5.8 2.3-7.5 5.8-2.6 5.8-6.9 14.1-12.8 20.5-5.9-6.3-9.7-13-13.1-20.5h-.1c-2.1-4.5-4.7-5.7-9.1-5.6h-33.7c-3.5.3-4 3.6-4 6.7 0 7.8 4.8 14.8 10.4 22 4.8 6.3 10.4 12.8 14.5 20-4.1.4-8.9 1.3-13.1 2.5-4.1 1.6-11.7 3.6-11.8 8.5 1 8 8.9 12.2 14.5 15.5 7.6 4.3 16.9 8.5 25.4 12.8.2 4.5 1.4 9.6 4.1 14 3.3 4.9 8.5 8.9 16 8.9 7.4.1 12.7-3.9 15.9-8.7 2.8-4.5 3.8-9.6 4.1-14.3 8.4-4.1 17.9-8.3 25.3-12.6 6-3.7 14.5-8.6 14.6-15.5-.6-5.3-7.8-7.3-11.7-8.5-4.3-1.2-9.1-2.2-13.3-2.6 4.2-7.2 9.7-13.7 14.6-20 5.5-7.2 10.4-14.2 10.4-21.9 0-3.3-.5-6.5-4.1-6.9-10.9-.2-22.6 0-33.8 0-.6-.1-1.2-.1-1.7-.1z' });


	const duration = 12000 * 1000;
	const end = Date.now() + duration;
	const _100meeple = new Array(100).fill(meeple);
	_100meeple.push(
		kingMeeple,
		meepleCirc,
		joker,
		queen,
		d4,
		d6,
		d10,
		d12,
		d20,
		emoji,
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
		'square',
	);
	const gravMin = -0.5;
	const gravMax = -0.1;
	const driftMin = -0.5;
	const driftMax = 0.5;

	(function frame() {
		// launch a few confetti from the left edge
		confetti({
			particleCount: 1,
			// angle: 330,
			// spread: 55,
			origin: { x: Math.random(), y: 1.2 },
			zIndex:0,
			flat: true,
			spin: true,
			maxSpin: 1,
			minSpin: -1,
			// shapes: ['square'],
			// shapes: [triangle],
			shapes: _100meeple,
			scalar: 10,
			// scalar: null,
			ticks: 1300,
			colors: ['eee'],
			opacity: 0.2,
			gravity: gravMin + (gravMax-gravMin)* Math.random(),
			minScale: 1,
			maxScale: 30,
			startVelocity: 0,
			drift: driftMin + (driftMax-driftMin)* Math.random(),
		});
		// and launch a few from the right edge
		// confetti({
		// 	particleCount: 70,
		// 	angle: 120,
		// 	spread: 55,
		// 	origin: { x: 1 },
		// 	zIndex:0
		// });

		// keep going until we are out of time
		if (Date.now() < end) {
			setTimeout(frame, 1000);
			// requestAnimationFrame(frame);
		}
	}());
}

window.onload = longConfetti;