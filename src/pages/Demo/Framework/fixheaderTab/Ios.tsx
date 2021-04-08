import React, { useState, useEffect } from 'react';

import { Layout, Card } from 'tea-component/lib';

const { Body, Header, Content } = Layout;

export default function App() {
  return (
    <>
      <Card>
        <Card.Body title="图标" subtitle="(16*16)">
          hello
        </Card.Body>
      </Card>
    </>
  );
}
