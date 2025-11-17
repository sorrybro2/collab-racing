/**
 * 게임 모드 선택 화면 컴포넌트
 * 클래식 모드와 아이템 모드 중 하나를 선택할 수 있습니다.
 */
function ModeSelectionScreen({ onSelectMode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
          🏎️ 자동차 경주 게임
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          플레이할 모드를 선택하세요
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 클래식 모드 카드 */}
          <button
            onClick={() => onSelectMode('classic')}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group hover:scale-105"
          >
            <div className="text-6xl mb-4">🏁</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              클래식 모드
            </h2>
            <p className="text-gray-600 leading-relaxed">
              기본 레이싱 게임을 즐겨보세요.
              <br />
              순수한 운으로 승부하는 모드입니다.
            </p>
          </button>

          {/* 아이템 모드 카드 */}
          <button
            onClick={() => onSelectMode('item')}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group hover:scale-105"
          >
            <div className="text-6xl mb-4">🎁</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              아이템 모드
            </h2>
            <p className="text-gray-600 leading-relaxed">
              다양한 아이템으로 더욱 재미있게!
              <br />
              전략적인 플레이를 즐겨보세요.
            </p>
            <span className="inline-block mt-3 text-sm text-indigo-600 font-semibold">
              Coming Soon
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModeSelectionScreen;

