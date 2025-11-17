import { useState } from 'react';
import { useRacingGame } from './hooks/useRacingGame';
import { useItemModeGame } from './hooks/useItemModeGame';
import ModeSelectionScreen from './components/ModeSelectionScreen';
import InputForm from './components/InputForm';
import RacingScreen from './components/RacingScreen';
import ResultScreen from './components/ResultScreen';
import WinnersHistoryScreen from './components/WinnersHistoryScreen';
import ItemModeInputForm from './components/ItemModeInputForm';
import ItemModeRacingScreen from './components/ItemModeRacingScreen';
import ItemModeResultScreen from './components/ItemModeResultScreen';

/**
 * 메인 App 컴포넌트
 */
function App() {
  const [selectedMode, setSelectedMode] = useState(null); // 'classic' 또는 'item'
  
  // 클래식 모드 훅
  const classicMode = useRacingGame();
  
  // 아이템 모드 훅
  const itemMode = useItemModeGame();

  /**
   * 모드 선택 핸들러
   */
  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
  };

  /**
   * 모드 선택 화면으로 돌아가기
   */
  const handleBackToModeSelection = () => {
    setSelectedMode(null);
  };

  /**
   * 게임 리셋 시 모드도 초기화
   */
  const handleResetGame = () => {
    setSelectedMode(null);
    if (selectedMode === 'classic') {
      classicMode.resetGame();
    } else if (selectedMode === 'item') {
      itemMode.resetGame();
    }
  };

  return (
    <div className="App">
      {/* 모드 선택 화면 */}
      {!selectedMode && (
        <ModeSelectionScreen onSelectMode={handleSelectMode} />
      )}

      {/* ========== 클래식 모드 ========== */}
      {selectedMode === 'classic' && (
        <>
          {/* 클래식 모드 - 입력 화면 */}
          {classicMode.gameState === 'input' && (
            <InputForm 
              onStartGame={classicMode.startGame}
              onShowHistory={classicMode.showHistory}
              onBack={handleBackToModeSelection}
              error={classicMode.error}
            />
          )}

          {/* 클래식 모드 - 레이싱 화면 */}
          {classicMode.gameState === 'racing' && (
            <RacingScreen
              carNames={classicMode.carNames}
              raceHistory={classicMode.raceHistory}
              randomNumbers={classicMode.randomNumbers}
              onComplete={classicMode.showResult}
            />
          )}

          {/* 클래식 모드 - 결과 화면 */}
          {classicMode.gameState === 'result' && (
            <ResultScreen
              winners={classicMode.winners}
              carNames={classicMode.carNames}
              raceHistory={classicMode.raceHistory}
              onRestart={handleResetGame}
            />
          )}

          {/* 클래식 모드 - 역대 우승자 */}
          {classicMode.gameState === 'history' && (
            <WinnersHistoryScreen
              onBack={classicMode.backToInput}
            />
          )}
        </>
      )}

      {/* ========== 아이템 모드 ========== */}
      {selectedMode === 'item' && (
        <>
          {/* 아이템 모드 - 입력 화면 */}
          {itemMode.gameState === 'input' && (
            <ItemModeInputForm
              onStartGame={itemMode.startGame}
              onShowHistory={itemMode.showHistory}
              onBack={handleBackToModeSelection}
              error={itemMode.error}
            />
          )}

          {/* 아이템 모드 - 레이싱 화면 */}
          {itemMode.gameState === 'racing' && (
            <ItemModeRacingScreen
              carNames={itemMode.carNames}
              raceHistory={itemMode.raceHistory}
              targetDistance={itemMode.targetDistance}
              itemHistory={itemMode.itemHistory}
              onComplete={itemMode.showResult}
            />
          )}

          {/* 아이템 모드 - 결과 화면 */}
          {itemMode.gameState === 'result' && (
            <ItemModeResultScreen
              winners={itemMode.winners}
              carNames={itemMode.carNames}
              finalPositions={itemMode.finalPositions}
              targetDistance={itemMode.targetDistance}
              totalRounds={itemMode.totalRounds}
              onRestart={handleResetGame}
              onShowHistory={itemMode.showHistory}
            />
          )}

          {/* 아이템 모드 - 역대 우승자 */}
          {itemMode.gameState === 'history' && (
            <WinnersHistoryScreen
              onBack={itemMode.backToInput}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;

