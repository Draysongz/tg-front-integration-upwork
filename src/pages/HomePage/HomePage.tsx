import {
  AvatarImage,
  ComboIcon,
  DailyLoginIcon,
  DailyWordIcon,
  MainIcon,
  RoulleteIcon,
  TonCoinBlueIcon,
} from '@/assets';
import { HomeMenuItemCard } from '@/components/Cards/HomeMenuItemCard';
import { Footer } from '@/components/layout/Footer';
import { FC, useState, useEffect, useRef } from 'react';
import { Col, Container, Image, Row, Navbar } from 'react-bootstrap';
import { ShowAdButton } from '@/components/ShowAdButton';
import { useLocation } from 'react-router-dom';

export const HomePage: FC = () => {
 
  const [coins, setCoins] = useState(0);
  const [usercoin, setUserCoins] = useState(1000); // Starting with 1000 coins
  const [isBlocked, setIsBlocked] = useState(false);
  const [timer, setTimer] = useState(0);
  const [progress, setProgress] = useState(0);
  const [effects, setEffects] = useState<{ x: number; y: number; id: number }[]>([]);
  const [collectedCoins, setCollectedCoins] = useState(0); // Track collected coins
  const mainIconRef = useRef<HTMLImageElement>(null);
  const location = useLocation()
  const userData = location.state

  
  const TOTAL_CLICKS_NEEDED = 20;
  const CIRCLE_RADIUS = 100;
  const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

  const handleCoinClick = (event: React.MouseEvent) => {
    if (isBlocked) return;

    if (mainIconRef.current) {
      mainIconRef.current.classList.add('pressed');
      setTimeout(() => {
        mainIconRef.current?.classList.remove('pressed');
      }, 20);
    }

    const { clientX, clientY } = event;
    const effectId = Date.now();

    setEffects((prevEffects) => [
      ...prevEffects,
      { x: clientX, y: clientY, id: effectId },
    ]);

    setTimeout(() => {
      setEffects((prevEffects) =>
        prevEffects.filter((effect) => effect.id !== effectId)
      );
    }, 1200);

    setCoins((prevCoins) => {
      const newCoins = prevCoins + 1;
      const newProgress = ((newCoins % TOTAL_CLICKS_NEEDED) / TOTAL_CLICKS_NEEDED) * 100;
      setProgress(newProgress);

      if (newProgress === 0 && newCoins !== 0) {
        setIsBlocked(true);
        setTimer(50);
        handleCollectedCoinsAnimation(); // Trigger the animation
      }

      return newCoins;
    });
  };

  // Animate collected coins and update the top bar
  const handleCollectedCoinsAnimation = () => {
    setCollectedCoins(100); // Set collected coins to 100

    // Use a timeout to animate the countdown
    const countdownInterval = setInterval(() => {
      setCollectedCoins((prev) => {
        if (prev <= 0) {
          clearInterval(countdownInterval);
          setCoins((prevCoins) => prevCoins - TOTAL_CLICKS_NEEDED);
          setUserCoins((prevUserCoins) => prevUserCoins + 100); // Add collected coins to usercoin
          updateTopBarBalance(100); // Add 100 coins to the top bar
          return 0;
        }
        return prev - 1; // Decrement coins smoothly
      });
    }, 10); // Adjust the speed of the countdown
  };

  const updateTopBarBalance = (collectedCoins: number) => {
    // Increment the top bar balance smoothly
    const balanceElement = document.getElementById('top-balance');
    if (balanceElement) {
      // Get current balance from the top bar (existing value)
      let currentBalance = parseInt(balanceElement.innerText) || 0;
      const targetBalance = currentBalance + collectedCoins;

      // Increment the balance gradually until it reaches the target
      const incrementInterval = setInterval(() => {
        if (currentBalance >= targetBalance) {
          clearInterval(incrementInterval);
        } else {
          currentBalance += 1;
          balanceElement.innerText = `${currentBalance}`;
        }
      }, 10); // Speed of balance increment
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isBlocked) {
      setIsBlocked(false);
    }
    return () => clearInterval(interval);
  }, [timer, isBlocked]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <Row className="px-0 mx-0">
      <Col xs={12} className="mx-auto px-0">
        <div className="HomePage page">
          <Container>
            <Row className="my-3">
              <Col xs={6}>
                <div className="d-flex align-items-center">
                  <Image src={AvatarImage} width={32} height={32} className="me-2" />
                  <div className="fw-semibold text-white">{userData && userData?.username}</div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="d-flex align-items-center justify-content-end">
                  <Image src={TonCoinBlueIcon} width={32} height={32} className="me-2" />
                  <div id="top-balance" className="fw-semibold text-white">{usercoin}</div>
                </div>
              </Col>
            </Row>
          </Container>
          <section className="main-section py-3 bottom-0 mx-auto w-100">
            <Container>
              <div className="d-flex align-items-center justify-content-between">
                <HomeMenuItemCard path="/daily" title="Daily Login" icon={DailyLoginIcon} />
                <HomeMenuItemCard title="Combo" icon={ComboIcon} />
                <HomeMenuItemCard title="Daily Word" icon={DailyWordIcon} />
                <HomeMenuItemCard path="/roullete" title="Roullete" icon={RoulleteIcon} />
              </div>
              <div className="text-center claim-value fw-medium mt-5 text-white">
                <div className="collected-coin-amount">
  {collectedCoins > 0 ? (
    // Show collected coins during animation
    <span className="sliding-coin">{collectedCoins}</span>
  ) : (
    // Show final coins after animation
    <span>{coins} ETON</span>
  )}
</div>

              </div>
              <Row>
                <Col xs={10} className="mx-auto text-center">
                  <div className="coin-container">
                    <svg width="240" height="240" className="progress-ring">
                      <circle
                        className="progress-ring__background"
                        stroke="#148BF9"
                        strokeOpacity="0.24"
                        strokeWidth="10"
                        fill="transparent"
                        r={CIRCLE_RADIUS}
                        cx="120"
                        cy="120"
                      />
                      <circle
                        className="progress-ring__circle"
                        stroke="#148BF9"
                        strokeWidth="10"
                        fill="transparent"
                        r={CIRCLE_RADIUS}
                        cx="120"
                        cy="120"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                        transform="rotate(-90 120 120)"
                      />
                    </svg>
                    <Image
                      ref={mainIconRef}
                      src={MainIcon}
                      width="160"
                      height="160"
                      className="main-icon"
                      onClick={handleCoinClick}
                    />
                    {effects.map((effect) => (
                      <span
                        key={effect.id}
                        className="coin-effect"
                        style={{ left: `${effect.x - 100}px`, top: `${effect.y - 350}px` }}
                      >
                        +1
                      </span>
                    ))}
                  </div>
                  {isBlocked && (
                    <div className="timer-message">
                      You can collect coins again in {formatTime(timer)}.
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </section>
          <Navbar sticky="bottom">
            <Container className="w-100">
              <Row className="mb-5 w-100 mx-auto">
                <Col xs={12} className="mb-5 pb-2 px-0">
                  <ShowAdButton />
                </Col>
              </Row>
            </Container>
          </Navbar>
          <Footer isActive="home" />
        </div>
      </Col>
    </Row>
  );
};
