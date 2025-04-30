  return (
    <div className="relative w-full h-full">
      {/* Robot in top right */}
      <div className="absolute top-4 right-4 z-10">
        <Robot />
      </div>

      {/* Text between top left and top right */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Visual Graph</h2>
          <p className="text-gray-600">Explore the relationships between different concepts</p>
        </div>
      </div>

      {/* Visual Graph in top left */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="w-64 h-64">
            <ForceGraph2D
              graphData={graphData}
              nodeLabel="id"
              nodeAutoColorBy="group"
              linkDirectionalParticles={2}
              linkDirectionalParticleSpeed={0.005}
              linkDirectionalParticleWidth={2}
              linkDirectionalArrowLength={3}
              linkDirectionalArrowRelPos={1}
              linkCurvature={0.25}
              linkColor={() => '#999'}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.id as string;
                const fontSize = 12/globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.fillStyle = node.color || '#fff';
                ctx.beginPath();
                ctx.arc(node.x!, node.y!, 6, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = '#000';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(label, node.x!, node.y!);
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Graph */}
      <div className="w-full h-full">
        <ForceGraph2D
          graphData={graphData}
          nodeLabel="id"
          nodeAutoColorBy="group"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          linkDirectionalParticleWidth={2}
          linkDirectionalArrowLength={3}
          linkDirectionalArrowRelPos={1}
          linkCurvature={0.25}
          linkColor={() => '#999'}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id as string;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.fillStyle = node.color || '#fff';
            ctx.beginPath();
            ctx.arc(node.x!, node.y!, 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x!, node.y!);
          }}
        />
      </div>
    </div>
  ); 